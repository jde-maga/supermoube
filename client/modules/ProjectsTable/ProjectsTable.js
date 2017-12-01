/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ProjectsTable.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/12/01 13:19:01 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 15:03:07 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

import { getAllProjects } from '../../redux/actions/project';

@connect((state) => ({
  projects: state.project.get('projects'),
  nextPage: state.project.get('nextPage'),
  apiState: state.project.get('apiState'),
}), {
  getAllProjects,
})
class ProjectsTable extends Component {
static propTypes = {
  getAllProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  apiState: PropTypes.string.isRequired,
}

componentDidMount() {
  const { getAllProjects, nextPage } = this.props;
  getAllProjects({ page: nextPage });
}

render() {
  const { projects, nextPage, apiState } = this.props;

  const columns = [{
    title: 'Projet',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (<Link to={`projects/${record.slug}`}>{text}</Link>),
  }, {
    title: 'Tier',
    dataIndex: 'tier',
    key: 'tier',
  }, {
    title: 'Durée',
    dataIndex: 'duration',
    key: 'duration',
  }, {
    title: 'Corrections',
    dataIndex: 'corrections',
    key: 'corrections',
  }, {
    title: 'Inscrits',
    dataIndex: 'subscribed',
    key: 'subscribed',
  }, {
    title: 'Complétés',
    dataIndex: 'finished',
    key: 'finished',
  }, {
    title: 'Moyenne',
    dataIndex: 'average',
    key: 'average',
  }];
  const data = projects && projects.valueSeq().map((project) => ({
    name: project.get('name'),
    slug: project.get('slug'),
    tier: project.get('tier'),
    duration: project.get('projectSessions') && project.get('projectSessions').first().get('estimate_time'),
    corrections: null,
    subscribed: null,
    finished: null,
    average: null,
  }));

  console.log(projects.toJS());
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data && data.toJS()}
        pagination={{ pageSize: 15 }}
        onChange={(pagination) => {
          if (((nextPage - 1) * 10) - pagination.current <= 3) {
            this.props.getAllProjects({ page: nextPage });
          }
        }}
        loading={apiState === 'loading'}
        footer={() => (
          <div style={{ textAlign: 'center' }}>
            {apiState === 'loading'
              ? <FontAwesome name="spinner" spin />
              : <span>Tallying {projects.size} entries</span>
            }
          </div>
        )}
      />
    </div>
  );
}
}

export default ProjectsTable;
