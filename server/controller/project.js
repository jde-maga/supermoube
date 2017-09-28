/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:47:05 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/26 13:52:19 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const projectHelper = require('../helper/project');

const getAll = async (req, res) => {
  try {
    const ret = await projectHelper.getAll({ token: req.user.accessToken });
    res.send(ret);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getAll,
};
