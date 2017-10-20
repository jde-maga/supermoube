/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   RecentProjects.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:04 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/13 23:50:10 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Paper, Typography, FormGroup, FormControlLabel, Switch } from 'material-ui';
import _ from 'lodash';

import RecentProjectsTable from './RecentProjectsTable';
import { getRecentProjects } from '../../redux/actions/recentProject';
import { RecentProjectsStyle, styles } from './recentProjectStyle';

import Paginator from '../../components/Paginator/Paginator';
import BackToTop from '../../components/BackToTop/BackToTop';

@withStyles(styles)
@connect((state) => ({
  recentProjects: state.recentProject.get('recentProjects'),
  nextPage: state.recentProject.get('nextPage'),
  apiState: state.recentProject.get('apiState'),
}), {
  getRecentProjects,
})
class RecentProjects extends Component {
  static propTypes = {
    getRecentProjects: PropTypes.func.isRequired,
    nextPage: PropTypes.number.isRequired,
    apiState: PropTypes.string.isRequired,
    recentProjects: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  }

  state = {
    filter: {
      cursus: null,
    },
  };

  componentDidMount() {
    this.loadMoreContent = _.debounce(
      (page) => this.props.getRecentProjects({ page }),
      1000,
      { leading: true, trailing: false },
    );
  }

  render() {
    const { recentProjects, apiState, classes, nextPage } = this.props;

    return (
      <RecentProjectsStyle>
        <Paper className={classes.paper}>
          <Typography type="title" className={classes.title}>Filtres : </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Piscine C"
            />
            <FormControlLabel
              control={<Switch />}
              label="42"
            />
            <FormControlLabel
              control={<Switch />}
              label="Autre"
            />
          </FormGroup>
          <FormGroup column>
            <FormControlLabel
              control={<Switch />}
              label="Complété"
            />
            <FormControlLabel
              control={<Switch />}
              label="En correction"
            />
            <FormControlLabel
              control={<Switch />}
              label="Inscrit"
            />
          </FormGroup>
        </Paper>
        {recentProjects.entrySeq().map((entries, index) => (
          <RecentProjectsTable key={index} classes={classes} recentProjects={entries[1]} day={entries[0]} />
        ))}
        <Paginator
          loadMoreContent={() => this.loadMoreContent(nextPage)}
          classes={classes}
          apiState={apiState}
        />
        <BackToTop classes={classes} />
      </RecentProjectsStyle>
    );
  }
}

export default RecentProjects;
