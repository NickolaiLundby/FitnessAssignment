'use strict';

// Module dependencies
const workouts = require('../controllers/workouts')
const users = require('../controllers/users');
const index = require('../controllers/index');

module.exports = function(app, passport) {
    // Index routes
    app.get('/', index.index)

    // User routes
    app.get('/login', users.showLogin);
    app.post('/login', users.login);
    app.get('/register', users.showRegister);
    app.post('/register', users.register);

    // Workout routes
    app.get('/workout/showall', workouts.showall);
    app.get('/workout/show/:id', workouts.show);
    app.get('/workout/create', workouts.new);
    app.post('/workout/create', workouts.create);

    // Error handling
    app.use(function(req, res, next) {
        next(createError(404));
    });
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
    
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}