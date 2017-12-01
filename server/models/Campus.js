/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Campus.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/12/01 17:11:42 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 17:13:28 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const campusSchema = new Schema({
  id: Number,
  name: String,
  timezone: String,
  language: Object,
  userCount: Number,
});

const campusModel = mongoose.model('Campus', campusSchema);

module.exports = campusModel;
