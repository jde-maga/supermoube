/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   RecentProjectsTable.js                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:58 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/13 09:23:13 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import FontAwesome from 'react-fontawesome';

import { Table, Paper, Typography } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import uniqueId from 'lodash/uniqueId';

import parseStatus from '../../lib/parseStatus';

const RecentProjects = (props) => {
  const { recentProjects, day, classes } = props;

  return (
    <Paper className={classes.paper}>
      {<Typography type="title" className={classes.title}>{moment(day).format('dddd, MMMM Do')}</Typography>}
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
          {recentProjects && recentProjects.valueSeq().map((project) => (
            <TableRow key={uniqueId('recentProjects_')}>
              <TableCell>{project.getIn(['updatedAt', 'time'])}</TableCell>
              <TableCell>{project.getIn(['user', 'login'])}</TableCell>
              <TableCell>{project.getIn(['project', 'name'])}</TableCell>
              <TableCell>{parseStatus(project.get('status'))}</TableCell>
              <TableCell numeric>
                {(project.get('status') === 'finished') ? (
                  <span>
                    {project.get('mark') || 0}&nbsp;
                    {project.get('validated')
                      ? <FontAwesome name="check" />
                      : <FontAwesome name="times" />
                    }
                  </span>
                ) : (
                  <span>
                    {project.get('status') === 'in_progress' && <FontAwesome name="play" />}
                    {project.get('status') === 'waiting_for_correction' && <FontAwesome name="upload" />}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

RecentProjects.propTypes = {
  recentProjects: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default RecentProjects;
