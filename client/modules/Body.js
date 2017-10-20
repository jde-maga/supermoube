/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Body.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 17:33:40 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/12 04:56:13 by jde-maga         ###   ########.fr       */
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
  marginBottom: '30px',
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
