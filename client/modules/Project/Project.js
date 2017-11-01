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

import Paginator from '../../components/Paginator/Paginator';
import BackToTop from '../../components/BackToTop/BackToTop';

@withStyles(styles)
@connect((state) => ({
  projects: state.project.get('projects'),
  nextPage: state.project.get('nextPage'),
  apiState: state.project.get('apiState'),
}), {
  getAllProjects,
})
class Project extends Component {
  static propTypes = {
    getAllProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    apiState: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { getAllProjects, nextPage } = this.props;
    getAllProjects({ page: nextPage });
  }

  render() {
    const { projects, classes, apiState } = this.props;

    return (
      <ProjectStyle>
        <ProjectTable classes={classes} projects={projects} />
        <Paginator
          loadMoreContent={() => null}
          classes={classes}
          apiState={apiState}
        />
        <BackToTop classes={classes} />
      </ProjectStyle>
    );
  }
}

export default Project;
