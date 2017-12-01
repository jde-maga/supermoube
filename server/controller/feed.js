/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   feed.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/08 02:58:23 by marvin            #+#    #+#             */
/*   Updated: 2017/12/01 15:55:52 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const feedHelper = require('../helper/feed');

const RecentProject = require('../models/RecentProject');

const getAll = async (req, res, next) => {
  try {
    const { query } = req;

    const feedPage = await feedHelper.getAll(RecentProject, query.page);
    return res.json(feedPage.docs);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
};
