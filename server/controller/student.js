/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   student.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:38:22 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/19 03:20:25 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Student = require('../models/Student');

const studentHelper = require('../helper/student');

const getAll = async (req, res, next) => {
  try {
    const students = await studentHelper.getAll(Student);
    return res.json(students.docs);
  } catch (err) {
    return next(err);
  }
};

const get = async (req, res, next) => {

  try {
    const student = await studentHelper.get(Student, req.params.id);
    return res.json(student);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
  get,
};
