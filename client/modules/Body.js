/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Body.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 17:33:40 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:39:59 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Header from './Header/Header';

const BodyStyle = glamorous.div({
  position: 'absolute',
  top: '72px',
  width: '100%',
});

const Body = ({ children }) => (
  <div>
    <Header />
    <BodyStyle>{children}</BodyStyle>
  </div>
);

Body.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Body;
