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
  const data = await Student.paginate({ cursus: { $elemMatch: { cursus_id: 1 } } }, {
    page,
    limit: 150,
    select: 'id login name.full wallet correctionPoints pool cursus',
  });
  return data;
};

const get = async (Student, id) => {
  const data = await Student.findOne({ login: id });
  return data;
};

module.exports = {
  getAll,
  get,
};
