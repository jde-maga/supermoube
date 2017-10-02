/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   User.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:53:48 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 15:03:04 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import { getAllUsers } from '../../redux/actions/user';

import UserTable from './UserTable';

import { UserStyle, style } from './userStyle';

@withStyles(style)
@connect((state) => ({
  users: state.user.get('users'),
}), {
  getAllUsers,
})
class User extends Component {
  static propTypes = {
    getAllUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { users, classes } = this.props;
    
    return (
      <UserStyle>
        <UserTable classes={classes} users={users} />
      </UserStyle>
    );
  }
}

export default User;