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
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
// @routes POST api/users
// @desc Register a user
// @access Public
router.post('/', [
    check('name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with at least 6 characters').isLength({ min: 6 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
        let user = yield User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        user = new User({
            name, email, password
        });
        const salt = yield bcrypt.genSalt(10);
        user.password = yield bcrypt.hash(password, salt);
        yield user.save();
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
        // res.send('User created in MongoDB.')
    }
    catch (err) {
        res.status(500).send('Server error');
        console.error(err.message);
    }
    // res.send('passed without errors')
}));
module.exports = router;
