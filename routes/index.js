
/*
 * GET home page.
 */

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.index = function(req, res){
  res.render('index', { title: 'Express todo list example' });
};

exports.create = function(req, res){
	new Todo({
		content : req.body.content,
		updated_at : Date.new()
	}).save(function(err, todo, count){
		res.redirect('/');
	});
}