
/**
 * Module dependencies.
 */

 // 注意排序

var express = require('express')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = module.exports = express();

require('./db');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
// app.use(express.methodOverride());
app.use(app.router);

// development only

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var routes = require('./routes')
//RESTful resource
app.get('/', routes.index);
// app.get('/show', routes.show);
// app.get('/new', routes.new);
app.post('/create', routes.create);
app.get('/edit/:id', routes.edit);
app.post('/update/:id', routes.update);
app.get('/destroy/:id', routes.destroy);

app.get('/users', user.list);
app.get('/users/:number', user.one);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
