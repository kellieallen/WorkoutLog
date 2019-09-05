var express = require('express')
var router = express.Router()      // We bring in our necessary imports. Same as the testcontroller, just with a User model now.
var sequelize = require('../db');
var User = sequelize.import('../models/users'); 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/*************************
** Create User Endpoint: Starter***
**************************/

router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 10),
        role: req.body.user.role
    })
        

    .then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
             } )
        },
        createError = err => res.send(500, err)
    )
})


// SIGNIN

router.post('/signin', (req, res) =>  {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
    .then(user => {
        if(user){
            bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                if(matches) {
                    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                    res.json({
                        user: user,
                        message: 'successfully authenticated user',
                        sessionToken: token
                    })
                } else { 
                    res.status(502).send({ error: 'bad gateway' })
                }
            })
        } else {
            res.status(500).send({ error: 'failed to authenticate'})
        }
    }, err => res.status(501).send({ error: 'failed to process'}))
})






module.exports = router;
