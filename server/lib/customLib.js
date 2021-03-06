/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   customLib.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/04 13:59:57 by Julien de M       #+#    #+#             */
/*   Updated: 2017/12/01 17:19:16 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const moment = require('moment-timezone');
const Promise = require('bluebird');

const fill = require('./fillApi');
const update = require('./updateApi');
const getAccessToken = require('../init/oauth2');

require('../init/mongo');

const displayToken = async () => {
  const token = await getAccessToken();
  console.log(token);
  return token;
};

(async () => {
  await displayToken();
  //await fill.projects();
  //await fill.recentProjects();
  await fill.students();
  //await fill.cursi();
  process.exit();
})();
