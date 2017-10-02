/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   UserTable.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:42 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:53:45 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, Paper } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const UserTable = (props) => {
  const { users, classes } = props;

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric>Promo</TableCell>
            <TableCell>Login</TableCell>
            <TableCell>Etudiant</TableCell>
            <TableCell>ETEC</TableCell>
            <TableCell numeric>Wallets</TableCell>
            <TableCell numeric>Pt. correction</TableCell>
            <TableCell numeric>Niveau</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.valueSeq().map((user, key) => {
            return (
              <TableRow key={key}>
                <TableCell>Soon</TableCell>
                <TableCell>{user.get('login')}</TableCell>
                <TableCell>{user.get('displayname')}</TableCell>
                <TableCell>Soon</TableCell>
                <TableCell>{user.get('wallet')}</TableCell>
                <TableCell>{user.get('correction_point')}</TableCell>
                <TableCell numeric>Soon</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

RecentProjects.propTypes = {
  users: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default UserTable;
