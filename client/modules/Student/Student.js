/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Student.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:48 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:32:11 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import { getAllStudents } from '../../redux/actions/student';

import StudentTable from './StudentTable';

import { StudentStyle, style } from './studentStyle';

@withStyles(style)
@connect((state) => ({
  students: state.student.get('students'),
}), {
  getAllStudents,
})
class Student extends Component {
  static propTypes = {
    getAllStudents: PropTypes.func.isRequired,
    students: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getAllStudents();
  }

  render() {
    const { students, classes } = this.props;
    
    return (
      <StudentStyle>
        <StudentTable classes={classes} students={students} />
      </StudentStyle>
    );
  }
}

export default Student;
