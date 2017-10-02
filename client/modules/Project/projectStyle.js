/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   projectStyle.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:01 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 15:59:38 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import glamorous from 'glamorous';

export const ProjectStyle = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
});

export const styles = (theme) => ({
  paper: {
    width: '60%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
});
