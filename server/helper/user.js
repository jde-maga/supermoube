/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:39:56 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:35:20 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const Promise = require('bluebird');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const getUser = async (token) => {
  const res = await api42.get('users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const getAll = async (token) => {
  console.log(token);
  const res = await api42.get('users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const resPopulated = await Promise.map(res.data, async (user) => {
    const userPopulated = await api42.get(`users/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return userPopulated.data;
  });
  return resPopulated;
};

module.exports = {
  getUser,
  getAll,
};
