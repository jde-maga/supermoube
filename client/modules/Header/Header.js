/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:10 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/18 09:46:03 by jde-maga         ###   ########.fr       */
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
      redirect: false,
      path: '/',
    };
  }

  componentWillUpdate(nP, nS) {
    if (nS.redirect && this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  changeTab = (e, val) => {
    if (this.state.currentTab === val) return;
    let path;
    if (val === 0) path = '/';
    if (val === 1) path = '/recentProjects';
    if (val === 2) path = '/student';
    if (val === 3) path = '/projects';
    if (val === 4) path = '/skills';
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
            <Tab label="42Feed" icon={<FontAwesome name="fast-forward" />} />
            <Tab label="Etudiants" icon={<FontAwesome name="graduation-cap" />} />
            <Tab label="Projets" icon={<FontAwesome name="database" />} />
            <Tab label="Compétences" icon={<FontAwesome name="briefcase" />} />
          </Tabs>
          <Button
            color="contrast"
            className={classes.loginButton}
            onClick={() => { window.location.href = '/login'; }}
          >
            Login@42
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
