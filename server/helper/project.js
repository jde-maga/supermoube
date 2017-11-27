/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:49:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/27 05:49:25 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const getAll = async (Project, page) => {
  const data = await Project.paginate({}, {
    page,
    limit: 150,
    sort: '-id',
  });
  return data;
};


module.exports = {
  getAll,
};
