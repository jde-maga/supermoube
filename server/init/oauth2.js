/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   oauth2.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/05 15:57:48 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/05 16:28:35 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const oauth2 = require('simple-oauth2');
const Promise = require('bluebird');

const keys = require('../../42keys.json');

const auth = oauth2.create({
  client: { id: keys.uid, secret: keys.secret },
  auth: { tokenHost: 'https://api.intra.42.fr/v2' },
});
const getTokenAsync = Promise.promisify(auth.clientCredentials.getToken);

const getAccessToken = async () => {
  const token = await getTokenAsync({});
  return token.access_token;
};

module.exports = getAccessToken;
