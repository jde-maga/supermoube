/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   recentProjects.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/08 02:58:23 by marvin            #+#    #+#             */
/*   Updated: 2017/10/12 03:22:41 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const recentProjectsHelper = require('../helper/recentProjects');

const RecentProject = require('../models/RecentProject');

const getAll = async (req, res, next) => {
  try {
    const { query } = req;

    const recentProjectsPage = await recentProjectsHelper.getAll(RecentProject, query.page);
    return res.json(recentProjectsPage.docs);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
};
