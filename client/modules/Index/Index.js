/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:04 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:05:01 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import RecentProjects from './RecentProjects';
import { getRecentProjects } from '../../redux/actions/project';
import { IndexStyle, styles } from '../Index/indexStyle';

@withStyles(styles)
@connect((state) => ({
  recentProjects: state.project.get('recentProjects'),
}), {
  getRecentProjects,
})
class Index extends Component {
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
      <IndexStyle>
        <RecentProjects classes={classes} recentProjects={recentProjects} />
      </IndexStyle>
    );
  }
}

export default Index;
