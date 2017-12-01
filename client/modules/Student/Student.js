/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Student.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/18 09:25:33 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 16:12:55 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';
import { Row, Col, Icon, Tabs, Table } from 'antd';

import { getStudent } from '../../redux/actions/student';

import parseStatus from '../../lib/parseStatus';

const { TabPane } = Tabs;

const StudentStyle = glamorous.div({
  ' .card': {
    padding: 10,
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',    
  },
  ' .avatar': {
    maxWidth: '200',
    maxHeight: '200',
  },
});

@connect((state) => ({
  student: state.student.get('one'),
}), {
  getStudent,
})
class Student extends Component {
  static propTypes = {
    student: PropTypes.object.isRequired,
    getStudent: PropTypes.func.isRequired,
  }

  state = {
    cursusTab: 1,
  }

  componentDidMount() {
    this.props.getStudent({ id: this.props.match.params.id });
  }

  render() {
    const { student } = this.props;
    const { cursusTab } = this.state;
    console.log(student.toJS());
    const columns = [{
      title: 'Projet',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Tries',
      dataIndex: 'occurrence',
      key: 'occurrence',
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

    const projects = student.get('projects');
    if (!projects) return (<div>loading</div>);

    const data = student.get('projects').valueSeq()
      .filter((project) => project.get('cursus_ids').includes(cursusTab))
      .map((project) => ({
        name: project.getIn(['project', 'name']),
        occurrence: project.get('occurrence'),
        status: project.get('status'),
        mark: project.get('final_mark'),
        validated: project.get('validated?'),
      }));

    return (
      <StudentStyle>
        <Row className="card">
          <Col span={8}>
            <img className="avatar" src={student.get('imageUrl')} alt="profile_picture" />
          </Col>
          <Col span={16}>
            <Row>
              <Col span={2}><Icon type="user" /></Col>
              <Col span={22}>{student.get('login')} - {student.getIn(['name', 'full'])}</Col>
            </Row>
            <Row>
              <Col span={2}><Icon type="mail" /></Col>
              <Col span={22}>{student.get('email')}</Col>
            </Row>
            <Row>
              <Col span={2}><Icon type="login" /></Col>
              <Col span={22}>{student.getIn(['pool', 'year'])} {student.getIn(['pool', 'month'])}</Col>
            </Row>
            <Row>
              <Col span={2}><Icon type="wallet" /></Col>
              <Col span={22}>{student.get('wallet')} ₳</Col>
            </Row>
            <Row>
              <Col span={2}><Icon type="solution" /></Col>
              <Col span={22}>{student.get('correctionPoints')} point{student.get('correctionPoints') > 1 && 's'} de correction</Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ padding: 10 }} />
        <Row>
          <Tabs onChange={(key) => this.setState({ cursusTab: Number(key) })}>
            {student.get('cursus').valueSeq().map((cursus) => (
              <TabPane tab={cursus.getIn(['cursus', 'name'])} key={cursus.get('cursus_id')}>
                {cursus.getIn(['cursus', 'name'])}
                <Table
                  columns={columns}
                  dataSource={data && data.toJS()}
                  pagination={false}
                  footer={() => (
                    <div style={{ textAlign: 'center' }}>OK</div>
                  )}
                />
              </TabPane>
            ))}
          </Tabs>
        </Row>
      </StudentStyle>
    );
  }
}

export default Student;
