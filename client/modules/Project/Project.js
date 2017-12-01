/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   OneProject.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/12/01 14:47:57 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 15:43:37 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProject } from '../../redux/actions/project';

@connect((state) => ({
  project: state.project.get('one'),
}), {
  getProject,
})
class OneProject extends Component {
  static propTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
  }
  componentDidMount() {
    this.props.getProject({ id: this.props.match.params.id });
  }

  render() {
    const { project } = this.props;

    return (
      <div>OneProject</div>
    );
  }
}

export default OneProject;
