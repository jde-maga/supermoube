/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ProjectTable.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:58 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:05:01 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, Paper } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const ProjectTable = (props) => {
  const { projects, classes } = props;

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Projet</TableCell>
            <TableCell>Tier</TableCell>
            <TableCell>Durée</TableCell>
            <TableCell>Corrections</TableCell>
            <TableCell numeric>Inscrits</TableCell>
            <TableCell numeric>Repos</TableCell>
            <TableCell numeric>Complétés</TableCell>
            <TableCell numeric>Moyenne</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects && projects.valueSeq().map((project, key) => {
            return (
              <TableRow key={key}>
                <TableCell>{project.get('name')}</TableCell>
                <TableCell>{project.get('tier')}</TableCell>
                <TableCell>{project.get('project_sessions').first().get('estimate_time')}</TableCell>
                <TableCell>Soon</TableCell>
                <TableCell numeric>Soon</TableCell>
                <TableCell numeric>Soon</TableCell>
                <TableCell numeric>Soon</TableCell>
                <TableCell numeric>Soon</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

ProjectTable.propTypes = {
  projects: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default ProjectTable;
