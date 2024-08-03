"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
// @routes GET api/auth
// @desc Get the logged in user    
// @access Private
router.get('/', auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('welcome but...', req.rawTrailers[0]);
        // const user = await User.findbyId(req.body.user.id).select('-password');
        const user = yield User.findById(req.rawTrailers[0]).select('-password');
        res.json(user);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    // res.send('Get logged in user')
}));
// @routes POST api/auth
// @desc Authorize user and get the token    
// @access Public
router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with at least 6 characters').isLength({ min: 6 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = yield User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid email", success: false });
        }
        const isMatch = yield bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid password', success: false });
        }
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 360000
        }, (err, token) => {
            if (err)
                throw err;
            res.json({ token });
        });
    }
    catch (err) {
        res.status(500).send('Server error');
        console.error(err.message);
    }
    // res.send('Login the user')
}));
module.exports = router;
