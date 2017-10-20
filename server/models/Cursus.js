/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cursus.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/10 05:16:58 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/19 02:15:15 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cursusSchema = new Schema({
  id: Number,
  name: String,
  slug: String,
});

const CursusModel = mongoose.model('Cursus', cursusSchema);

module.exports = CursusModel;
