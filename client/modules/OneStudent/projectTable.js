/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   projectTable.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/19 03:00:57 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/20 02:43:40 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import FontAwesome from 'react-fontawesome';

import { Table } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import uniqueId from 'lodash/uniqueId';

import parseStatus from '../../lib/parseStatus';

const ProjectTable = (props) => {
  const { projects, classes, cursus } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Projet</TableCell>
          <TableCell numeric>Tentatives</TableCell>
          <TableCell numeric>Note</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects && projects.valueSeq().map((project) => {
          if (!project.get('cursus_ids').includes(cursus)) return null;
          return (
            <TableRow key={project.get('id')}>
              <TableCell>{project.getIn(['project', 'name'])}</TableCell>
              <TableCell numeric>{project.get('occurrence') + 1}</TableCell>
              <TableCell numeric>
                {(project.get('status') === 'finished') ? (
                  <span>
                    {project.get('final_mark') || 0}&nbsp;
                    {project.get('validated?')
                      ? <FontAwesome name="check" />
                      : <FontAwesome name="times" />
                    }
                  </span>
                ) : (
                  <span>
                    {project.get('status') === 'in_progress' && <div>Demarré <FontAwesome name="play" /></div>}
                    {project.get('status') === 'waiting_for_correction' && <div>En correction <FontAwesome name="upload" /></div>}
                  </span>
                )}
              </TableCell>
            </TableRow>
          );
          
        })}
      </TableBody>
    </Table>
  );
};

ProjectTable.propTypes = {
  projects: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  cursus: PropTypes.number.isRequired,
};

export default ProjectTable;
