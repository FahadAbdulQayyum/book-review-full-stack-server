import { Request, Response } from "express";

const express = require('express');
const router = express.Router();

const { check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

// @routes POST api/users
// @desc Register a user
// @access Public

router.post('/', [
    check('name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with at least 6 characters').isLength({min: 6}),
], async (req: Request, res: Response)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ errors: [{msg: 'User already exists'}]});
        }

        user = new User({
            name, email, password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"),{
            expiresIn: 360000
        },(err: any,token: string)=>{
            if(err)throw err;
            res.json({token});
        })

        // res.send('User created in MongoDB.')

    } catch (err: any) {
        res.status(500).send('Server error');
        console.error(err.message);
    }
    
    // res.send('passed without errors')
})

module.exports = router