/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Paginator.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/13 09:12:36 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/27 06:09:31 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import FontAwesome from 'react-fontawesome';
import uniqueId from 'lodash/uniqueId';
import { Button } from 'antd';

const Paginator = (props) => (
  <Waypoint
    key={uniqueId('paginator_')}
    onEnter={() => { console.log('PROCCING PAGINATOR'), props.loadMoreContent()}}
  >
    <div>
      <Button
        type="primary"
        loading={(props.apiState === 'loading')}
        onClick={props.loadMoreContent}
      >
        <FontAwesome name="angle-double-down" />
      </Button>
    </div>
  </Waypoint>
);

Paginator.propTypes = {
  loadMoreContent: PropTypes.func.isRequired,
  apiState: PropTypes.string.isRequired,
};

export default Paginator;
