/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   nestedLength.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: marvin <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/06 19:44:47 by marvin            #+#    #+#             */
/*   Updated: 2017/10/06 19:48:18 by marvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const nestedLength = (array) => {
  let i = 0;
  array.forEach((nestedArray) => {
    i += nestedArray.length;
  });
  return i;
};

module.exports = nestedLength;
