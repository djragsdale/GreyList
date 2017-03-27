'use strict';

var express = require('express');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

let routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(function(req, res, next) {
	res.removeHeader('X-Powered-By');
	next();
});
app.use(cors());
let rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};
app.use(bodyParser.raw({
	verify: rawBodySaver,
	type: function() {
		return true;
	}
}));
app.use(cookieParser());
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.status,
		// message: err.message,
		error: {}
	});
});


module.exports = app;
