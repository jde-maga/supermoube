/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   customLib.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/04 13:59:57 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/05 17:05:13 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const Promise = require('bluebird');

const getAccessToken = require('../init/oauth2');
const db = require('../init/firebase');

const fs = require('fs');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const superStudents = async () => {
  const accessToken = await getAccessToken();
  let pageSize = 100;
  let page = 0;
  let allStudents = [];

  while (pageSize === 100 && page !== 20) {
    console.log(`fetching user data, page ${page}...`);
    const students = await api42.get(`users?per_page=100&page=${page}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    allStudents = [...allStudents, ...students.data];
    pageSize = students.data.length;
    page++;
  }
  console.log(`found ${allStudents.length} students`);

  let i = 0;
  const allStudentsPopulated = await Promise.map(allStudents, (async (student) => {
    const studentPopulated = await api42.get(`users/${student.id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log(`${i} / ${allStudents.length} -- populated student ${student.id} - ${student.login}`);
    i++;
    return studentPopulated.data;
  }));
  console.log(`found ${allStudentsPopulated.length} students`);

  await Promise.map(allStudentsPopulated, (async (student) => {
    await db.ref(`students/${student.id}`).set(student);
    console.log(`saved ${student.id} - ${student.login} to FBDB`);
  }));
  console.log('SUPERSTUDENTS DONE');
};

superStudents();

const superCursus = () => {
  auth.clientCredentials.getToken({}).then(async (res) => {
    const accessToken = auth.accessToken.create(res);
    console.log('token', accessToken);

    let pageSize = 100;
    let page = 0;
    let allCursus = [];
    while (pageSize === 100) {
      console.log(`fetching cursus data, page ${page}...`);
      const cursus = await api42.get(`cursus?per_page=100&page=${page}`, { // eslint-disable-line no-await-in-loop
        headers: { Authorization: `Bearer ${accessToken.token.access_token}` },
      });
      allCursus = [...allCursus, ...cursus.data];
      pageSize = cursus.data.length;
      page++;
    }
    console.log(`found ${allCursus.length} cursus`);

    const length = allCursus.length;
    let i = 1;
    await Promise.map(allCursus, (async (cursus) => {
      console.log(cursus);
      console.log(`saving to FBDB cursus ${cursus.id}...`);
      await db.ref(`cursus/${cursus.id}`).set(cursus);
      console.log(`${i} / ${length} - saved ${cursus.id}`);
      i++;
    }));
    process.exit();
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = {
  superStudents,
  superCursus,
};
