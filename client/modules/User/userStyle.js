/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   userStyle.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:53 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:53:54 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import glamorous from 'glamorous';

export const UserStyle = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
});

export const style = (theme) => ({
  paper: {
    width: '60%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
});
