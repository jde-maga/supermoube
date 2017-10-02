/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   student.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:39:56 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 16:54:02 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const Promise = require('bluebird');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const getAll = async (token) => {
  const res = await api42.get('users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const resPopulated = await Promise.map(res.data, async (student) => {
    const studentPopulated = await api42.get(`users/${student.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return studentPopulated.data;
  });
  return resPopulated;
};

module.exports = {
  getAll,
};
