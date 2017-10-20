/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   BackToTop.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/13 09:29:32 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/13 09:32:16 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import FontAwesome from 'react-fontawesome';

const toTop = () => {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  if (top > 0) {
    window.scrollTo(0, top - 1500);
    setTimeout(this.backToTop, 10);
  }
};

const BackToTop = (props) => (
  <Button fab color="accent" className={props.classes.button} onClick={toTop}>
    <FontAwesome name="chevron-up" />
  </Button>
);

BackToTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default BackToTop;
