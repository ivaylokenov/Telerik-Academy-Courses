var passport = require('passport'),
    auth = require('./auth');

module.exports = function(app) {
    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
}