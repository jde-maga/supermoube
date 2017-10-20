/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   StudentTable.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:42 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/18 16:23:48 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, Paper } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Link } from 'react-router-dom';

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
              <Link key={key} to={`/student/${student.get('id')}`}>
                <TableRow>
                  <TableCell>Soon</TableCell>
                  <TableCell>{student.get('login')}</TableCell>
                  <TableCell>{student.getIn(['name', 'full'])}</TableCell>
                  <TableCell>Soon</TableCell>
                  <TableCell>{student.get('wallet')}</TableCell>
                  <TableCell>{student.get('correctionPoints')}</TableCell>
                  <TableCell numeric>Soon</TableCell>
                </TableRow>
              </Link>
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
