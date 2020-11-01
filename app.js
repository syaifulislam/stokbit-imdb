var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var searchRouter = require('./routes/search');
var detailRouter = require('./routes/detail');
var routeMiddleware = require('./route-middleware')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/search', routeMiddleware, searchRouter);
app.use('/detail', routeMiddleware, detailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
console.log(`App listening at http://localhost:3000`)
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
