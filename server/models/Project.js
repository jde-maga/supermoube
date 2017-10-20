/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/20 03:01:28 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/20 03:05:15 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  id: Number,
  name: String,
  slug: String,
  description: String,
  parent: Object,
  children: Array,
  objectives: Array,
  tier: Number,
  attachments: Array,
  createdAt: String,
  updatedAt: String,
  exam: Boolean,
  cursus: Array,
  campus: Array,
  skills: Array,
  videos: Array,
  tags: Array,
  projectSessions: Array,
});

const CursusModel = mongoose.model('Project', projectSchema);

module.exports = CursusModel;
