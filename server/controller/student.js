/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   student.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:38:22 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:23:08 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const studentHelper = require('../helper/student');

const getAll = async (req, res) => {
  try {
    const ret = await studentHelper.getAll(req.user.accessToken);
    res.send(ret);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {
  getAll,
};
