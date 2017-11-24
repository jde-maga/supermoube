/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/11/23 03:50:34 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/23 03:54:04 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import { Footer } from 'antd/lib/layout';

class MyFooter extends Component {
  constructor(props) {
    super(props);
    null;
  }

  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        jde-maga 2017
      </Footer>
    );
  }
}

export default MyFooter;
