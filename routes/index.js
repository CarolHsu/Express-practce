
/*
 * GET home page.
 */

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.index = function(req, res){
  res.render('index', { title: 'Express todo list example' });
};
