/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   RecentProject.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/10 03:02:39 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/19 02:14:57 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recentProjectSchema = new Schema({
  id: Number,
  project: {
    id: Number,
    parentId: Number,
    name: String,
    slug: String,
  },
  status: String,
  mark: Number,
  validated: Boolean,
  user: {
    id: Number,
    login: String,
  },
  updatedAt: {
    day: String,
    time: String,
  },
});

const RecentProject = mongoose.model('RecentProject', recentProjectSchema);

module.exports = RecentProject;

