/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:47:05 by Julien de M       #+#    #+#             */
/*   Updated: 2017/12/01 15:08:27 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const projectHelper = require('../helper/project');

const Project = require('../models/Project');

const getAll = async (req, res, next) => {
  try {
    const { query } = req;

    const projectPage = await projectHelper.getAll(Project, query.page);
    return res.json(projectPage.docs);
  } catch (err) {
    return next(err);
  }
};

const get = async (req, res, next) => {
  try {
    console.log('getting something', req.params);
    const project = await projectHelper.get(Project, req.params.id);
    console.log(project);
    return res.json(project);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
  get,
};
