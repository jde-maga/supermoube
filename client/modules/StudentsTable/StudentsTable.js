/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   StudentsTable.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/11/27 17:03:28 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 14:22:48 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

import { getAllStudents } from '../../redux/actions/student';

@connect((state) => ({
  students: state.student.get('students'),
  nextPage: state.student.get('nextPage'),
  apiState: state.student.get('apiState'),
}), {
  getAllStudents,
})
class StudentsTable extends Component {
  static propTypes = {
    getAllStudents: PropTypes.func.isRequired,
    nextPage: PropTypes.number.isRequired,
    apiState: PropTypes.string.isRequired,
    students: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { nextPage } = this.props;
    if (nextPage === 1) this.props.getAllStudents({ page: 1 });
  }

  render() {
    const { students, nextPage, apiState } = this.props;

    const columns = [{
      title: 'Promo',
      dataIndex: 'promo',
      key: 'promo',
      render: (text) => moment(text).format('\'YY MMM'),
      width: '10%',
    }, {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
      render: (text) => (<Link to={`students/${text}`}>{text}</Link>),
      width: '10%',
    }, {
      title: 'Etudiant',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (<Link to={`students/${record.login}`}>{text}</Link>),
      width: '50%',
    }, {
      title: 'ETEC',
      dataIndex: 'etec',
      key: 'etec',
      render: () => 'Soon',
      width: '10%',
    }, {
      title: 'Wallets',
      dataIndex: 'wallet',
      key: 'wallet',
      width: '10%',
    }, {
      title: 'Pts. correc.',
      dataIndex: 'correctionPoints',
      key: 'correctionPoints',
      width: '10%',
    }];
    const data = students && students.valueSeq().map((student) => ({
      promo: `${student.getIn(['pool', 'month'])} ${student.getIn(['pool', 'year'])}`,
      login: student.get('login'),
      name: student.getIn(['name', 'full']),
      etec: null,
      wallet: student.get('wallet'),
      correctionPoints: student.get('correctionPoints'),
    }));

    return (
      <div>
        <Table
          columns={columns}
          dataSource={data && data.toJS()}
          pagination={{ pageSize: 15 }}
          onChange={(pagination) => {
            if (((nextPage - 1) * 10) - pagination.current <= 3) {
              this.props.getAllStudents({ page: nextPage });
            }
          }}
          loading={apiState === 'loading'}
          footer={() => (
            <div style={{ textAlign: 'center' }}>
              {apiState === 'loading'
                ? <FontAwesome name="spinner" spin />
                : <span>Tallying {students.size} entries</span>
              }
            </div>
          )}
        />
      </div>
    );
  }
}

export default StudentsTable;
