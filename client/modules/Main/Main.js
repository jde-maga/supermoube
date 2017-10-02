/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:04 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:54:44 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import RecentProjects from './RecentProjects';
import { getRecentProjects } from '../../redux/actions/project';
import { MainStyle, styles } from '../Main/mainStyle';

@withStyles(styles)
@connect((state) => ({
  recentProjects: state.project.get('recentProjects'),
}), {
  getRecentProjects,
})
class Main extends Component {
  static propTypes = {
    getRecentProjects: PropTypes.func.isRequired,
    recentProjects: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.getRecentProjects();
  }

  render() {
    const { recentProjects, classes } = this.props;

    return (
      <MainStyle>
        <RecentProjects classes={classes} recentProjects={recentProjects} />
      </MainStyle>
    );
  }
}

export default Main;
