/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:38:22 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/25 17:42:59 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const userHelper = require('../helper/user');

const getUser = async (req, res) => {
  try {
    const ret = await userHelper.getUser();
    console.log(ret);
    res.end(ret);
  } catch (err) {
    console.log(err);
    res.end(err);
  }
};

module.exports = {
  getUser,
};
