/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   fillApi.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/06 17:23:04 by marvin            #+#    #+#             */
/*   Updated: 2017/10/20 03:10:08 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const Promise = require('bluebird');
const moment = require('moment-timezone');

const getAccessToken = require('../init/oauth2');
const sleep = require('./sleep');

const RecentProjectModel = require('../models/RecentProject');
const StudentModel = require('../models/Student');
const CursusModel = require('../models/Cursus');
const ProjectModel = require('../models/Project');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const students = async () => {
  console.log('starting fill on students');

  const page = {
    index: 1,
    currentSize: 0,
    maxSize: 100,
  };
  let entries = [];
  let accessToken = await getAccessToken();
  let entriesLength = 0;
  let i = 1;

  console.log('calculating fill size...');
  do {
    const { data } = await api42.get(`users?&per_page=100&page=${page.index}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    entries = [...entries, data];
    page.currentSize = data.length;
    page.index++;
    entriesLength += data.length;
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
      const Student = new StudentModel({
        id: student.id,
        correctionPoints: student.correction_point,
        email: student.email,
        imageUrl: student.image_url,
        login: student.login,
        phone: student.phone,
        name: {
          full: student.displayname,
          first: student.first_name,
          last: student.last_name,
        },
        pool: {
          month: student.pool_month,
          year: student.pool_year,
        },
        staff: student['staff?'],
        wallet: student.wallet,
        projects: student.projects_users,
        titles: student.titles,
        partnerships: student.partnerships,
        patronage: {
          patroned: student.patroned,
          patroning: student.patroning,
        },
        cursus: student.cursus_users,
        campus: student.campus_users,
        achievements: student.achievements,
      });
      await Student.save();
      console.log(`${i} / ${entriesLength} -- ${student.id} - ${student.login} -- saved`);
      i++;
    });
  });
  console.log('finished fill of students');
};

const cursi = async () => {
  console.log('starting fill on cursi');

  const page = {
    index: 1,
    currentSize: 0,
    maxSize: 100,
  };
  let entries = [];
  let entriesLength = 0;
  let i = 1;

  console.log('calculating fill size...');
  do {
    const accessToken = await getAccessToken();

    const { data } = await api42.get(`cursus?&per_page=100&page=${page.index}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    entries = [...entries, ...data];
    page.currentSize = data.length;
    page.index++;
    entriesLength += data.length;
    console.log(`so far : ${entriesLength} entries`);
  } while (page.currentSize === page.maxSize);
  console.log(`found ${entriesLength} entries`);

  await Promise.map(entries, (async (cursus) => {
    const Cursus = new CursusModel({
      id: cursus.id,
      name: cursus.name,
      slug: cursus.slug,
    });
    await Cursus.save();
    console.log(`${i} / ${entriesLength} -- ${cursus.id} - ${cursus.slug} -- saved`);
    i++;
  }));
  console.log('finished fill of cursi');
};

const recentProjects = async () => {
  console.log('starting fill on recent projects');

  const page = {
    index: 1,
    currentSize: 0,
    maxSize: 100,
  };
  const startTime = moment().tz('UTC').subtract(1, 'day').startOf('day').format('YYYY-MM-DDTHH:mm:ss');
  const endTime = moment().tz('UTC').endOf('day').format('YYYY-MM-DDTHH:mm:ss');
  let entries = [];
  let entriesLength = 0;
  let i = 1;

  console.log('calculating fill size...');
  do {
    const accessToken = await getAccessToken();

    const res = await api42.get(`projects_users?range[updated_at]=${startTime},${endTime}&per_page=100&page=${page.index}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log(res);
    const data = res.data;
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
      const updatedAt = moment(updated_at);
      return updatedAt.isAfter(mostRecent) ? updatedAt : mostRecent;
    }, moment(0));
    if (day.isBefore(startTime)) {
      console.log(`${i} / ${entriesLength} -- ${recentProject.id} -- project has invalid time frame. Skipping...`);
      i++;
      return;
    }
    const RecentProject = new RecentProjectModel({
      id: recentProject.id,
      project: {
        id: recentProject.project.id,
        parentId: recentProject.project.parent_id,
        name: recentProject.project.name,
        slug: recentProject.project.slug,
      },
      status: recentProject.status,
      mark: recentProject.final_mark || null,
      validated: !!recentProject['validated?'],
      user: {
        id: recentProject.user.id,
        login: recentProject.user.login,
      },
      updatedAt: {
        day: moment(day).format('YYYY-MM-DD'),
        time: moment(day).format('HH:mm'),
        full: moment(day).format(),
      },
    });
    await RecentProject.save();
    console.log(`${i} / ${entriesLength} -- ${recentProject.id} -- saved`);
    i++;
  }));
  console.log('finished fill of recentProjects');
};

const projects = async () => {
  console.log('starting fill on projects');

  const page = {
    index: 1,
    currentSize: 0,
    maxSize: 100,
  };
  let entries = [];
  let entriesLength = 0;
  let i = 1;

  console.log('calculating fill size...');
  do {
    const accessToken = await getAccessToken();

    const res = await api42.get(`projects?per_page=100&page=${page.index}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log(res);
    const data = res.data;
    entries = [...entries, ...data];
    page.currentSize = data.length;
    page.index++;
    entriesLength += data.length;
    console.log(`so far : ${entriesLength} entries`);
  } while (page.currentSize === page.maxSize);
  console.log(`found ${entriesLength} entries`);

  await Promise.map(entries, (async (project) => {
    const Project = new ProjectModel({
      id: project.id,
      name: project.name,
      slug: project.slug,
      description: project.description,
      parent: project.parent,
      children: project.childrren,
      objectives: project.objectives,
      tier: project.tier,
      attachments: project.attachments,
      createdAt: project.created_at,
      updatedAt: project.updated_at,
      exam: project.exam,
      cursus: project.cursus,
      campus: project.campus,
      skills: project.skills,
      videos: project.videos,
      tags: project.tags,
      projectSessions: project.sessions,
    });
    await Project.save();
    console.log(`${i} / ${entriesLength} -- ${project.id} -- saved`);
    i++;
  }));
  console.log('finished fill of projects');
};

module.exports = {
  students,
  cursi,
  recentProjects,
  projects,
};
