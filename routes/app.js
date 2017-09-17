var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(error, doc) {
        if (error) {
            return res.send('Error');
        }

        res.render('node', {email: doc});
    });
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Nikolay',
        lastName: 'Gelemerov',
        password: 'secret',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
