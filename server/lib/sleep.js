/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sleep.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: marvin <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/06 17:23:39 by marvin            #+#    #+#             */
/*   Updated: 2017/10/06 17:24:10 by marvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const sleep = (ms = 1000) => {
  console.log(`sleeping for ${ms}ms...`);
  return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = sleep;
