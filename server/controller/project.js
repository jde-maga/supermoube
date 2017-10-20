/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:47:05 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/11 02:31:12 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const logger = require('../lib/logger');

const projectHelper = require('../helper/project');

const getAll = async (req, res, next) => {
  logger.verbose(`${req.user.accessToken} requested /api/getAllProjects`);
  try {
    const projects = await projectHelper.getAll({
      token: req.user.accessToken,
    });
    logger.verbose(`${req.user.accessToken} success /api/getAllProjects : ${res}`);
    return res.json(projects);
  } catch (err) {
    return next(err);
  }
};

const recentProjects = async (req, res, next) => {
  try {
    logger.verbose(`${req.user.accessToken} requested /api/getRecentProjects`);
    const projects = await projectHelper.recentProjects({
      token: req.user.accessToken,
      query: req.query,
    });
    logger.verbose(`${req.user.accessToken} success /api/getRecentProjects : ${res}`);
    return res.json(projects);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  recentProjects,
  getAll,
};
