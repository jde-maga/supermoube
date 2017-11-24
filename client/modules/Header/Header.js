/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/11/23 03:29:02 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/23 03:57:37 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import { Header } from 'antd/lib/layout';
import Menu, { Item } from 'antd/lib/menu';

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    const url = String(window.location.href);
    let path = 0;
    if (url.match(/recentProjects/)) path = 1;
    if (url.match(/student/)) path = 2;
    if (url.match(/projects/)) path = 3;
    if (url.match(/skills/)) path = 4;
    this.state = {
      currentTab: path,
      path: '/',
    };
  }

  render() {
    return (
      <Header className="header">
        <div className="logo" />
        SUPERMOUBE
      </Header>
    );
  }
}

export default CustomHeader;
