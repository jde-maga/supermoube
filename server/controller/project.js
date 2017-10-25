/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:47:05 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/25 05:02:29 by jde-maga         ###   ########.fr       */
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

module.exports = {
  getAll,
};
