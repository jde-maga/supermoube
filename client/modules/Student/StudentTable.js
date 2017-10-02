/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   StudentTable.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:42 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:23:08 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, Paper } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const StudentTable = (props) => {
  const { students, classes } = props;

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
          {students && students.valueSeq().map((student, key) => {
            return (
              <TableRow key={key}>
                <TableCell>Soon</TableCell>
                <TableCell>{student.get('login')}</TableCell>
                <TableCell>{student.get('displayname')}</TableCell>
                <TableCell>Soon</TableCell>
                <TableCell>{student.get('wallet')}</TableCell>
                <TableCell>{student.get('correction_point')}</TableCell>
                <TableCell numeric>Soon</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

StudentTable.propTypes = {
  students: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default StudentTable;
