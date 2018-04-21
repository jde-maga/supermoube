/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:16:46 by Julien de M       #+#    #+#             */
/*   Updated: 2018/04/21 20:59:44 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

require('babel-polyfill');

require('./lib/logger');
require('./init/mongo');
require('./init/passport');
require('./init/express');
reauire('./lib/cronUpdate');