/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Project.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:04 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/25 05:07:18 by jde-maga         ###   ########.fr       */
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
  nextPage: state.project.get('nextPage'),
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
    const { getAllProjects, nextPage } = this.props;
    getAllProjects(nextPage);
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
