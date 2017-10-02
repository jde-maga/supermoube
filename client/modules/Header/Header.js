/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:10 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:54:44 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Redirect } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Button,
  withStyles,
  Tabs,
  Tab,
} from 'material-ui';

import styles from './headerStyle';

@withStyles(styles)
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    currentTab: 0,
    redirect: false,
    path: '/',
  };

  componentWillUpdate(nP, nS) {
    if (nS.redirect && this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  changeTab = (e, val) => {
    let path;
    if (val === 0) path = '/';
    if (val === 1) path = '/user';
    if (val === 2) path = '/projects';
    if (val === 3) path = '/skills';
    this.setState({ currentTab: val, redirect: true, path });
  };

  render() {
    const { classes } = this.props;
    const { currentTab, redirect, path } = this.state;

    if (redirect) return (<Redirect to={path} />);

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Tabs
            className={classes.tabMenu}
            value={currentTab}
            onChange={this.changeTab}
          >
            <Tab label="SUPERMoube" icon={<FontAwesome name="star" />} />
            <Tab label="Etudiants" icon={<FontAwesome name="graduation-cap" />} />
            <Tab label="Projets" icon={<FontAwesome name="database" />} />
            <Tab label="Compétences" icon={<FontAwesome name="briefcase" />} />
          </Tabs>
          <Button color="contrast" className={classes.loginButton}>Login@42</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
