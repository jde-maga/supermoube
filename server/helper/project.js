/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/26 13:49:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/12/01 15:09:22 by jde-maga         ###   ########.fr       */
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

const get = async (Student, id) => {
  const data = await Student.findOne({ slug: id });
  return data;
};

module.exports = {
  getAll,
  get,
};
