var mongoose = require('mongoose');
var config = require('./config.js');

module.exports = function() {
	var host = config.mongodbConfig.host;
	var dbname = config.mongodbConfig.database;
	var connectUrl = 'mongodb://' + host + '/' + dbname;
	var db = mongoose.connect(connectUrl);
	return db;
}