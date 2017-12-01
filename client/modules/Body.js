/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Body.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 17:33:40 by Julien de M       #+#    #+#             */
/*   Updated: 2017/12/01 17:38:16 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Footer from './Footer/Footer';

const { SubMenu, Item } = Menu;
const { Content, Sider } = Layout;

const Body = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <SideMenu />
      <Layout style={{ padding: '24px 24px 0 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  </Layout>
);

Body.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Body;
