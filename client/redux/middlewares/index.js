/**
 * Dependencies
 */

import thunk from 'redux-thunk';
import 'whatwg-fetch';

/**
 * Middlewares
 */

import logger from './logger';
import api from './api';
/**
 * Interface
 */

export default [
  thunk,
  logger,
  api,
];
