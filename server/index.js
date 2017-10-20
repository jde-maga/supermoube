/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:16:46 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/10 02:50:54 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

require('babel-polyfill');

require('./lib/logger');
require('./init/mongo');
require('./init/passport');
require('./init/express');
