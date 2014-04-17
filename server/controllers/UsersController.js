var encryption = require('../utilities/encryption');
var User = require('mongoose').model('User');

module.exports = {
    createUser: function(req, res, next) {
        var newUserData = req.body;
        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
        User.create(newUserData, function(err, user) {
            if (err) {
                console.log('Failed to register new user: ' + err);
                return;
            }

            req.logIn(user, function(err) {
                if (err) {
                    res.status(400);
                    return res.send({reason: err.toString()});
                };

                res.send(user);
            })
        });
    },
    updateUser: function(req, res, next) {
        if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
            var updatedUserData = req.body;
            if (updatedUserData.password && updatedUserData.password.length > 0) {
                updatedUserData.salt = encryption.generateSalt();
                updatedUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
            }

            User.update({_id: req.body._id}, updatedUserData, function() {
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    getAllUsers: function(req, res) {
        User.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Users could not be loaded: ' + err);
            }

            res.send(collection);
        })
    }
}