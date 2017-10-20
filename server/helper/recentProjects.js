/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   recentProjects.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/08 03:07:29 by marvin            #+#    #+#             */
/*   Updated: 2017/10/12 05:06:03 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const getAll = async (RecentProject, page) => {
  const data = await RecentProject.paginate({}, {
    page,
    limit: 100,
    sort: '-updatedAt',
  });
  return data;
};

module.exports = {
  getAll,
};
