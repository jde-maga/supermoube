/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   logger.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:38:47 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/01 15:43:44 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const winston = require('winston');
const moment = require('moment-timezone');

moment.tz.setDefault('Europe/Paris');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: `logs/${moment()}_server.log` }),
  ],
});

module.exports = logger;
