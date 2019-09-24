'use strict';

// Module dependencies
const users = require('../controllers/users');
const index = require('../controllers/index');
const workouts = require('../controllers/workouts');
const auth = require('connect-ensure-login');

module.exports = function(app, passport) {
    // Index routes
    app.get('/', index.index)

    // User routes
    app.get('/login', users.showLogin);
    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
        res.redirect('/');
        });
    app.get('/register', users.showRegister);
    app.post('/register', users.register);

    // Workout routes
    app.get('/workout/showall', auth.ensureLoggedIn('/login'), workouts.showall);
    app.get('/workout/show/:id', auth.ensureLoggedIn('/login'), workouts.show); 
    app.get('/workout/create', auth.ensureLoggedIn('/login'), workouts.new);
    app.post('/workout/create', auth.ensureLoggedIn('/login'), workouts.create);
    app.post('/workout/:id/addExercise', auth.ensureLoggedIn('/login'), workouts.addExercise);
  
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