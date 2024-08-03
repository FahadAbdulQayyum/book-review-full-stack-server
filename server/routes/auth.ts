import { Request, Response } from "express";
const {check, validationResult} = require("express-validator")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');
const auth = require('../middleware/auth');
const express = require('express');

const router = express.Router()

// @routes GET api/auth
// @desc Get the logged in user    
// @access Private

router.get('/', auth, async (req: Request, res: Response)=> {
    try {
        console.log('welcome but...', req.rawTrailers[0])
        // const user = await User.findbyId(req.body.user.id).select('-password');
        const user = await User.findById(req.rawTrailers[0]).select('-password');
        res.json(user)

    } catch (err: any) {
        console.error(err.message)
        res.status(500).send('Server Error')
        
    }
    // res.send('Get logged in user')
})

// @routes POST api/auth
// @desc Authorize user and get the token    
// @access Public

router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with at least 6 characters').isLength({min: 6}),
], async (req: Request, res: Response)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({ msg: "Invalid email", success: false});
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({msg: 'Invalid password', success:false});            
        }

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

    } catch (err: any) {
        res.status(500).send('Server error');
        console.error(err.message);        
    }

    // res.send('Login the user')
})

module.exports = router