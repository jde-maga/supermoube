/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   routes.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:38:53 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:23:08 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

const projectController = require('../controller/project');
const studentController = require('../controller/student');

const router = express.Router();

router.get('/login', passport.authenticate('42'));
router.get('/login/redirect',
  passport.authenticate('42', { failureRedirect: '/ping' }),
  (req, res) => res.redirect('/'),
);

router.get('/me', (req, res) => { res.send(req.user); });

router.get('/api/getRecentProjects', projectController.getRecentProjects);
router.get('/api/getAllProjects', projectController.getAll);
router.get('/api/getAllStudents', studentController.getAll);

router.get('/ping', (req, res) => res.json('Pong.'));
router.get('*', ensureLoggedIn(), (req, res) => res.render('index'));

module.exports = router;
