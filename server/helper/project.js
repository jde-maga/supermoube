/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:49:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/26 14:22:11 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const getAll = async ({ token }) => {
  const res = await api42.get('projects_users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

module.exports = {
  getAll,
};
