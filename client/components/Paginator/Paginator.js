/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Paginator.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/13 09:12:36 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/13 23:50:35 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import Button from 'material-ui/Button';
import FontAwesome from 'react-fontawesome';
import uniqueId from 'lodash/uniqueId';
import glamorous from 'glamorous';

const PaginatorStyle = glamorous.div({
  width: '5%',
  margin: '15px',
});

const Paginator = (props) => (
  <Waypoint
    key={uniqueId('paginator_')}
    onEnter={props.loadMoreContent}
  >
    <PaginatorStyle onClick={props.loadMoreContent}>
      <Button className={props.classes.root} onClick={props.loadMoreContent}>
        {props.apiState === 'OK' && <FontAwesome name="angle-double-down" />}
        {props.apiState === 'loading' && <FontAwesome name="spinner" spin />}
      </Button>
    </PaginatorStyle>
  </Waypoint>
);

Paginator.propTypes = {
  loadMoreContent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  apiState: PropTypes.string.isRequired,
};

export default Paginator;
