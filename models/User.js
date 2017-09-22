/**
 * Created by Shrimp on 2017/8/17.
 */

var mongoose = require('mongoose');
var userSchema = require('../schemas/users');

module.exports = mongoose.model('User', userSchema);
