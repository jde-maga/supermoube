/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sortFullStudents.js                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/04 13:59:57 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/04 17:55:25 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const Promise = require('bluebird');
const oauth2 = require('simple-oauth2');
const fs = require('fs');
const firebase = require('firebase-admin');

const keys = JSON.parse(fs.readFileSync('/Users/julien/42keys.json', 'utf8'));

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});
const auth = oauth2.create({
  client: { id: keys.uid, secret: keys.secret },
  auth: { tokenHost: 'https://api.intra.42.fr/v2' },
});

firebase.initializeApp({
  credential: firebase.credential.cert({}),
  databaseURL: 'https://supermoube.firebaseio.com',
});

const db = firebase.database();

const superStudents = () => {
  auth.clientCredentials.getToken({}).then(async (res) => {
    const accessToken = auth.accessToken.create(res);
    console.log('token', accessToken);

    let pageSize = 100;
    let page = 0;
    let allStudents = [];
    while (pageSize === 100) {
      console.log(`fetching user data, page ${page}...`);
      const students = await api42.get(`cursus/2/cursus_users?per_page=100&page=${page}`, { // eslint-disable-line no-await-in-loop
        headers: { Authorization: `Bearer ${accessToken.token.access_token}` },
      });
      allStudents = [...allStudents, ...students.data];
      pageSize = students.data.length;
      page++;
    }
    console.log(allStudents[100]);
    console.log(`found ${allStudents.length} students`);
/*
    const length = allStudents.length;
    let i = 1;
    await Promise.map(allStudents, (async (student) => {
      console.log(`populating student ${student.id} - ${student.login} and saving it to FBDB...`);
      const studentPopulated = await api42.get(`users/${student.id}`, {
        headers: { Authorization: `Bearer ${accessToken.token.access_token}` },
      });
      db.ref(`students/${student.id}`).set(studentPopulated.data);
      console.log(`${i} / ${length} - saved ${student.id} - ${student.login}`);
      i++;
    }));*/
    process.exit();
  }).catch((err) => {
    console.log(err);
  });
};

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
      db.ref(`cursus/${cursus.id}`).set(cursus);
      console.log(`${i} / ${length} - saved ${cursus.id}`);
      i++;
    }));
    process.exit();
  }).catch((err) => {
    console.log(err);
  });
};

superCursus();

module.exports = {
  superStudents,
  superCursus,
};
