var express = require('express')
var router = express.Router()
var mongoConnect = require('../connection/mongo')
var { User } = require('../models/user')

var routes = function () {

    router.route('/users')
    .get(async (req, res) => {

        var users = null

        // Check search by Email
        if (req.query.email)
        {
            users = await User.find(
                {
                    "email" : req.query.email
                }
            )
        } else {
            users = await User.find()
        }

        return res.status(200).json({
            data: users,
            statusCode: 200,
            message: 'Get Succeed'
        });
    });

    router.route('/user')
    .post(async (req, res) => {
        let user = new User({
            email : req.body.email ? req.body.email : '',
            password: req.body.password ? req.body.password : ''
        });

        user.save((err) => {
            if (err) {
                return res.status(200).json({
                    data: err,
                    statusCode: 100,
                    message: 'Error'
                });
            }

            return res.status(200).json({
                data: user,
                statusCode: 200,
                message: 'Succceed'
            });
        });
    });

    return router;
};
module.exports = routes;