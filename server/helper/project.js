/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:49:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/25 05:02:14 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const getAll = async (Project, page) => {
  const data = await Project.paginate({}, {
    page,
    limit: 100,
    sort: '-id',
  });
  return data;
};


module.exports = {
  getAll,
};
