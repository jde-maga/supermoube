/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   student.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/25 17:39:56 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 16:54:02 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const getAll = async (Student, page = 1) => {
  const data = await Student.paginate({}, {
    page,
    limit: 150,
    select: 'id login name.full wallet correctionPoints',
  });
  return data;
};

const get = async (Student, id) => {
  const data = await Student.findOne({ id });
  return data;
};

module.exports = {
  getAll,
  get,
};
