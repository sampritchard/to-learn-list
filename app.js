const express = require('express');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const helpers = require('./helpers');

// Models
const User = require('./models/User');
const List = require('./models/List');
const Item = require('./models/Item');
const Mentor = require('./models/Mentor');
const Mentorship = require('./models/Mentorship');

// Routes
const index = require('./routes/index');
const users = require('./routes/users');
const sessions = require('./routes/sessions');
const lists = require('./routes/lists');
const items = require('./routes/items');
const mentors = require('./routes/mentors');

require('./handlers/passport');

const app = express();


// import environmental variables from our development.env file
require('dotenv').config();
const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

// Connect to our Database and handle an bad connections
mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`], {useMongoClient: true});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Start our app!
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());

app.use(session({
  secret: 'password',
  key: 'keys',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/sessions', sessions);
app.use('/lists', lists);
app.use('/items', items);
app.use('/mentors', mentors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
module.exports = mongoose;
