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
import _ from 'lodash';
import { Table } from 'antd';
import Tabs, { TabPane } from 'antd/lib/tabs';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

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
    this.props.getRecentProjects({ page: 1 });
  }

  render() {
    const { recentProjects } = this.props;

    const columns = [{
      title: 'Heure',
      dataIndex: 'time',
      key: 'time',
      width: '100px',
    }, {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
      width: '200px',
      render: (text) => (<Link to="">{text}</Link>),
    }, {
      title: 'Projet',
      dataIndex: 'project',
      key: 'project',
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      fixed: 'right',
      width: '125px',
      render: (text) => parseStatus(text),
    }, {
      title: 'Note',
      key: 'mark',
      fixed: 'right',
      width: '125px',
      render: (text, record) => {
        if (record.status === 'finished') {
          return (
            <span>
              {record.valiated
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
    const data = (recentProjects.first()) && recentProjects.first().valueSeq().map((project) => ({
      time: project.getIn(['updatedAt', 'time']),
      login: project.getIn(['user', 'login']),
      project: project.getIn(['project', 'name']),
      status: project.get('status'),
      mark: project.get('mark'),
      validated: project.get('validated'),
    }));

    return (
      <div>
        <Table columns={columns} dataSource={data && data.toJS()} />
      </div>
    );
  }
}

export default RecentProjects;
