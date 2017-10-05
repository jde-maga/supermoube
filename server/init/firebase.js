/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   firebase.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/05 15:55:49 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/05 16:01:10 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const firebase = require('firebase-admin');

const keys = require('../../firebasekeys.json');

firebase.initializeApp({
  credential: firebase.credential.cert(keys),
  databaseURL: 'https://supermoube.firebaseio.com',
});

const db = firebase.database();

module.exports = db;
