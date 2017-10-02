/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:49:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/29 14:00:33 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');
const queryString = require('query-string');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const getAll = async ({ token, query }) => {
  console.log(token);
  const params = queryString.stringify(query);
  console.log(params);
  const res = await api42.get(`projects_users?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

module.exports = {
  getAll,
};
