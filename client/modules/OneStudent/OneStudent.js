/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   OneStudent.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/18 09:25:33 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/20 02:51:56 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Paper, Tab, Tabs, Avatar } from 'material-ui';
import FontAwesome from 'react-fontawesome';

import { getStudent } from '../../redux/actions/student';

import ProjectTable from './projectTable';

import { OneStudentStyle, styles } from './oneStudentStyle';

@withStyles(styles)
@connect((state) => ({
  student: state.student.get('one'),
}), {
  getStudent,
})
class OneStudent extends Component {
  static propTypes = {
    student: PropTypes.object.isRequired,
    getStudent: PropTypes.func.isRequired,
  }

  state = {
    tab: 0,
  }

  componentDidMount() {
    this.props.getStudent({ id: this.props.match.params.id });
  }

  render() {
    const { student } = this.props;
    const { tab } = this.state;

    return (
      <OneStudentStyle>
        <Paper>
          <Avatar className="profilePicture" src={student.get('imageUrl')} alt="profile_picture" />
          <div>
            <div>
              <div>{student.getIn(['name', 'full'])}</div>
              <div>{student.get('login')}</div>
            </div>
            <div>
              {student.get('staff') && <div>Staff member</div>}
              <div><FontAwesome name="envelope" /> : {student.get('email')}</div>
              <div><FontAwesome name="shopping-cart" /> : {student.get('wallet')}</div>
              <div><FontAwesome name="commenting" /> : {student.get('correctionPoints')} pts. de correction</div>
              <div>Piscine de {student.getIn(['pool', 'month'])} {student.getIn(['pool', 'year'])}</div>
            </div>
          </div>
        </Paper>
        -
        <Paper>
          <Tabs value={tab} onChange={(e, val) => {console.log(e.target); this.setState({ tab: val })}}>
            {student.get('cursus') && student.get('cursus').valueSeq().map((cursus) => (
              <Tab key={cursus.get('id')} label={cursus.getIn(['cursus', 'name'])} />
            ))}
          </Tabs>
          <ProjectTable projects={student.get('projects')} cursus={student.getIn(['cursus', tab, 'cursus_id'])} />
        </Paper>
      </OneStudentStyle>
    );
  }
}

export default OneStudent;
