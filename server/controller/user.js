/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:38:22 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/26 10:54:12 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const userHelper = require('../helper/user');

const getUser = async (req, res) => {
  try {
    const ret = await userHelper.getUser(req.user.accessToken);
    res.send(ret);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getUser,
};
