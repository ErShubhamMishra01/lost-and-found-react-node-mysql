var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouters= require('./routes/dashboard');

var app = express();

// writting console logs into files
var fs=require('fs');
var util=require('util')
var log_file=fs.createWriteStream(__dirname+'/logs/lost-and-found-.log')
var log_stdout=process.stdout;
console.log=function(d){
  log_file.write(util.format(d)+'\n');
  log_stdout.write(util.format(d)+'\n');
}

//endolg logger code

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/data',express.static('public/data/') )

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouters);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
