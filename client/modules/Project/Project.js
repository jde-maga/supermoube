/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:04 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 16:05:48 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import ProjectTable from './ProjectTable';
import { getAllProjects } from '../../redux/actions/project';
import { ProjectStyle, styles } from './projectStyle';

@withStyles(styles)
@connect((state) => ({
  projects: state.project.get('projects'),
}), {
  getAllProjects,
})
class Project extends Component {
  static propTypes = {
    getAllProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    const { projects, classes } = this.props;

    return (
      <ProjectStyle>
        <ProjectTable classes={classes} projects={projects} />
      </ProjectStyle>
    );
  }
}

export default Project;
