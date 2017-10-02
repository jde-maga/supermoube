/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   express.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:17:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:54:28 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const logger = require('../lib/logger');

const app = express();

/**
 * Hot reload configuration
 */

/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));
/* eslint-enable import/no-extraneous-dependencies */

app.set('showStackError', true);
app.set('root', '/');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  type: '*/*',
}));
app.use('/', require('./routes.js'));

const server = app.listen(8080, () => {
  logger.info('node', 'Started server on port 8080');
});

server.on('error', (error) => {
  logger.error('node', error);
});

module.exports = server;
