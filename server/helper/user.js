/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:39:56 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/26 13:53:09 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const axios = require('axios');

const api42 = axios.create({
  baseURL: 'https://api.intra.42.fr/v2',
});

const getUser = async (token) => {
  const res = await api42.get('users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

module.exports = {
  getUser,
};
