/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   recentProjectStyle.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:01 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/13 09:37:32 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import glamorous from 'glamorous';

export const RecentProjectsStyle = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const styles = (theme) => ({
  paper: {
    width: '75%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
    display: 'flex',
  },
  title: {
    marginTop: '10px',
    marginLeft: '10px',
  },
  root: {
    width: '100%',
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  },
  button: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
  },
});
