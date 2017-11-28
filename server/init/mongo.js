/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mongo.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/10 02:45:42 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/28 20:52:12 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

mongoose.plugin(mongoosePaginate);

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

mongoose.connect('mongodb://jde-maga:z36gfO6iyo3A16R8@supermoube-shard-00-00-2l0os.mongodb.net:27017,supermoube-shard-00-01-2l0os.mongodb.net:27017,supermoube-shard-00-02-2l0os.mongodb.net:27017/test?ssl=true&replicaSet=supermoube-shard-0&authSource=admin', {
  useMongoClient: true,
});
/*
mongodb://jde-maga:z36gfO6iyo3A16R8@supermoube-shard-00-00-2l0os.mongodb.net:27017,supermoube-shard-00-01-2l0os.mongodb.net:27017,supermoube-shard-00-02-2l0os.mongodb.net:27017/test?ssl=true&replicaSet=supermoube-shard-0&authSource=admin
*/