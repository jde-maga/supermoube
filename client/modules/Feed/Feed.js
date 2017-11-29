/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Feed.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:04 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/29 05:21:09 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

import parseStatus from '../../lib/parseStatus';

import { getRecentProjects } from '../../redux/actions/recentProject';

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
  }

  componentDidMount() {
    const { nextPage } = this.props;
    if (nextPage === 1) this.props.getRecentProjects({ page: 1 });
  }

  render() {
    const { recentProjects, nextPage, apiState } = this.props;

    const columns = [{
      title: 'Heure',
      dataIndex: 'time',
      key: 'time',
      width: '15%',
    }, {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
      width: '15%',
      render: (text) => (<Link to={`students/${text}`}>{text}</Link>),
    }, {
      title: 'Projet',
      dataIndex: 'project',
      key: 'project',
      width: '45%',
      render: (text, record) => (<Link to={`projects/${record.projectId}`}>{text}</Link>),
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      filters: [{
        text: 'Complété',
        value: 'finished',
      }, {
        text: 'Inscrit',
        value: 'in_progress',
      }, {
        text: 'En correction',
        value: 'waiting_for_correction',
      }],
      onFilter: (value, record) => record.status === value,
      render: (text) => parseStatus(text),
    }, {
      title: 'Note',
      key: 'mark',
      width: '10%',
      filters: [{
        text: 'Validé',
        value: true,
      }, {
        text: 'Echoué',
        value: false,
      }],
      onFilter: (value, record) => (record.validated === !!(value === 'true') && record.status === 'finished'),
      render: (text, record) => {
        if (record.status === 'finished') {
          return (
            <span>
              {record.validated
                ? <FontAwesome name="check" />
                : <FontAwesome name="times" />
              }&nbsp;
              {record.mark || 0}
            </span>
          );
        } else if (record.status === 'in_progress') {
          return (<FontAwesome name="play" />);
        } else if (record.status === 'waiting_for_correction') {
          return (<FontAwesome name="upload" />);
        }
        return '-';
      },
    }];
    const data = recentProjects && recentProjects.valueSeq().map((project) => ({
      time: `${moment(project.getIn(['updatedAt', 'day'])).format('MM-DD')} ${project.getIn(['updatedAt', 'time'])}`,
      login: project.getIn(['user', 'login']),
      project: project.getIn(['project', 'name']),
      status: project.get('status'),
      mark: project.get('mark'),
      validated: project.get('validated'),
      projectId: project.getIn(['project', 'id']),
    }));

    return (
      <div>
        <Table
          columns={columns}
          dataSource={data && data.toJS()}
          pagination={{ pageSize: 15 }}
          onChange={(pagination) => {
            if (((nextPage - 1) * 10) - pagination.current <= 3) {
              this.props.getRecentProjects({ page: nextPage });
            }
          }}
          loading={apiState === 'loading'}
          footer={() => (
            <div style={{ textAlign: 'center' }}>
              {apiState === 'loading'
                ? <FontAwesome name="spinner" spin />
                : <span>Tallying {recentProjects.size} entries</span>
              }
            </div>
          )}
        />
      </div>
    );
  }
}

export default RecentProjects;
