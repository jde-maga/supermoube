/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   studentStyle.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:53 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:23:08 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import glamorous from 'glamorous';

export const StudentStyle = glamorous.div({
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
