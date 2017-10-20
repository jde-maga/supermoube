/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   updateApi.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/06 17:45:47 by marvin            #+#    #+#             */
/*   Updated: 2017/10/12 01:38:02 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const Promise = require('bluebird');
const moment = require('moment-timezone');

const getAccessToken = require('../init/oauth2');
const sleep = require('./sleep');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const students = async () => {
  console.log('starting update on students');

  const page = {
    index: 0,
    currentSize: 0,
    maxSize: 100,
  };
  const startTime = await dbUtils.get('timestamps/updateStudents');
  const endTime = moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss');
  let entries = [];
  let accessToken = await getAccessToken();
  let entriesLength = 0;
  let i = 1;

  console.log('calculating fill size...');
  do {
    const studentsPage = await api42.get(`users?range[updated_at]=${startTime},${endTime}&sort=-updated_at&per_page=100&page=${page.index}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    entries = [...entries, studentsPage.data];
    page.currentSize = studentsPage.data.length;
    page.index++;
    entriesLength += studentsPage.data.length;
    console.log(`so far : ${entriesLength} entries`);
  } while (page.currentSize === page.maxSize);
  console.log(`found ${entriesLength} entries`);

  await Promise.each(entries, async (studentPage) => {
    await sleep(1500);
    accessToken = await getAccessToken();

    const studentPagePopulated = await Promise.map(studentPage, async (student) => {
      const { data } = await api42.get(`users/${student.id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
      console.log(`populated student ${data.id} - ${data.login}`);
      return data;
    });
    await Promise.map(studentPagePopulated, async (student) => {
      await db.ref(`students/${student.id}`).set(student);
      console.log(`${i} / ${entriesLength} -- ${student.id} - ${student.login} -- saved to FBDB`);
      i++;
    });
  });

  await db.ref('timestamps/updateStudents').set(endTime);
  console.log('updated updateStudents timestamp');
  console.log('finished update of students');
};

const recentProjects = async () => {
  console.log('starting update on recentProjects');

  const page = {
    index: 0,
    currentSize: 0,
    maxSize: 100,
  };
  const startTime = await dbUtils.get('timestamps/updateRecentProjects');
  const endTime = moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss');
  let entries = [];
  let accessToken = await getAccessToken();
  let entriesLength = 0;
  let i = 1;

  console.log('calculating fill size...');
  do {
    accessToken = await getAccessToken();

    const { data } = await api42.get(`projects_users?range[updated_at]=${startTime},${endTime}&per_page=100&page=${page.index}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    entries = [...entries, ...data];
    page.currentSize = data.length;
    page.index++;
    entriesLength += data.length;
    console.log(`so far : ${entriesLength} entries`);
  } while (page.currentSize === page.maxSize);
  console.log(`found ${entriesLength} entries`);

  await Promise.map(entries, (async (recentProject) => {
    if (recentProject.status === 'waiting_to_start' || recentProject.status === 'searching_a_group' || recentProject.status === 'creating_group') {
      console.log(`${i} / ${entriesLength} -- ${recentProject.id} -- project has non-interesting status. Skipping...`);
      i++;
      return;
    }

    const day = recentProject.teams.reduce((mostRecent, { updated_at }) => {
      const teamUpdated = moment(updated_at);
      return teamUpdated.isAfter(mostRecent) ? teamUpdated : mostRecent;
    }, moment(0));
    if (day.isBefore(startTime)) {
      console.log(`${i} / ${entriesLength} -- ${recentProject.id} -- project has invalid time frame. Skipping...`);
      i++;
      return;
    }

    await db.ref(`recentProjects/${moment(day).format('YYYY-MM-DD')}/${recentProject.id}`).set(recentProject);
    console.log(`${i} / ${entriesLength} -- ${recentProject.id} -- saved to FBDB recentProjects`);
    i++;
  }));

  await db.ref('timestamps/updateRecentProjects').set(endTime);
  console.log('updated updateStudents timestamp');
  console.log('finished update of students');
};

module.exports = {
  students,
  recentProjects,
};
