/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   routes.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:38:53 by Julien de M       #+#    #+#             */
/*   Updated: 2017/12/01 15:59:30 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');
const passport = require('passport');
const { ensureLoggedIn } = require('connect-ensure-login');

const projectController = require('../controller/project');
const studentController = require('../controller/student');
const feedController = require('../controller/feed');

const router = express.Router();

router.get('/login', passport.authenticate('42'));
router.get(
  '/login/redirect',
  passport.authenticate('42', { failureRedirect: '/ping' }),
  (req, res) => res.redirect('/'),
);

router.get('/me', (req, res) => { res.send(req.user); });

router.get('/api/feed', feedController.getAll);

router.get('/api/projects/:id', projectController.get);
router.get('/api/projects', projectController.getAll);

router.get('/api/student/:id', studentController.get);
router.get('/api/student', studentController.getAll);

router.get('/ping', (req, res) => res.json('Pong.'));
router.get('*', ensureLoggedIn(), (req, res) => res.render('index'));

module.exports = router;
