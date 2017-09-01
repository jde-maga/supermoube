/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   routes.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:38:53 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/01 17:16:20 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');

const router = express.Router();

router.get('*', (req, res) => res.render('index'));
router.get('/ping', (req, res) => res.json('Pong.'));

module.exports = router;
