/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   student.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:38:22 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 18:02:31 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const logger = require('../lib/logger');

const studentHelper = require('../helper/student');

const getAll = async (req, res, next) => {
  try {
    logger.verbose(`${req.user.accessToken} requested /api/getAllStudents`);
    const students = await studentHelper.getAll(req.user.accessToken);
    logger.verbose(`${req.user.accessToken} success /api/getAllStudents : ${res}`);
    return res.json(students);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
};
