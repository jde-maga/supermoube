/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   RecentProjects.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:58 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:54:44 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import FontAwesome from 'react-fontawesome';

import { Table, Paper } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import parseStatus from '../../lib/parseStatus';

const RecentProjects = (props) => {
  const { recentProjects, classes } = props;

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Heure</TableCell>
            <TableCell>Étudiant</TableCell>
            <TableCell>Projet</TableCell>
            <TableCell>Status</TableCell>
            <TableCell numeric>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentProjects && recentProjects.valueSeq().map((project, key) => {
            let team = project.get('teams');
            if (team.size) team = team.first();
            const time = (!team) ? '-' : moment(team.get('updated_at')).format('MM/DD HH:mm');
            return (
              <TableRow key={key}>
                <TableCell>{time}</TableCell>
                <TableCell>{project.getIn(['user', 'login'])}</TableCell>
                <TableCell>{project.getIn(['project', 'name'])}</TableCell>
                <TableCell>{parseStatus(project.get('status'))}</TableCell>
                {(project.get('status') === 'finished') &&
                  <TableCell numeric>
                    {project.get('final_mark')}
                    {project.get('validated?')
                      ? <FontAwesome name="check" />
                      : <FontAwesome name="times" />
                    }
                  </TableCell>
                }
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

RecentProjects.propTypes = {
  recentProjects: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default RecentProjects;
