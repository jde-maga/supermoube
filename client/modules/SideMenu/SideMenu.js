/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   SideMenu.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/11/23 03:39:26 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/27 15:19:52 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import { Icon } from 'antd';
import { Sider } from 'antd/lib/layout';
import Menu, { Item } from 'antd/lib/menu';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKey: window.location.pathname.replace(/^\/([^/]*).*$/, '$1') || 'home',
      collapsed: false,
    };
  }

  render() {
    const { collapsed, defaultKey } = this.state;

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => this.setState({ collapsed: !collapsed })}
      >
        <Menu theme="dark" defaultSelectedKeys={[defaultKey]} mode="inline">
          <Item key="home">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Item>
          <Item key="feed">
            <Link to="/feed">
              <Icon type="forward" />
              <span>42 Feed</span>
            </Link>
          </Item>
          <Item key="students">
            <Link to="/students">
              <Icon type="user" />
              <span>Etudiants</span>
            </Link>
          </Item>
          <Item key="projects">
            <Link to="/projects">
              <Icon type="appstore" />
              <span>Projets</span>
            </Link>
          </Item>
          <Item key="skills">
            <Link to="/skills">
              <Icon type="star" />
              <span>Competences</span>
            </Link>
          </Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideMenu;
