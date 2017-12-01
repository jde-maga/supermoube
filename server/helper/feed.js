/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   recentProjects.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/08 03:07:29 by marvin            #+#    #+#             */
/*   Updated: 2017/11/27 05:49:18 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const getAll = async (RecentProject, page) => {
  const data = await RecentProject.paginate({}, {
    page,
    limit: 150,
    sort: '-updatedAt',
  });
  return data;
};

module.exports = {
  getAll,
};
