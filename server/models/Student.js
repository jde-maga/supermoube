/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Student.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/10 05:26:45 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/19 02:15:11 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  id: Number,
  correctionPoints: Number,
  email: String,
  imageUrl: String,
  login: String,
  phone: Number,
  name: {
    full: String,
    first: String,
    last: String,
  },
  pool: {
    month: String,
    year: Number,
  },
  staff: Boolean,
  wallet: Number,
  cursus: Array,
  campus: Array,
  projects: Array,
  achievements: Array,
  titles: Array,
  partnerships: Array,
  patronage: {
    patroned: Array,
    patroning: Array,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
