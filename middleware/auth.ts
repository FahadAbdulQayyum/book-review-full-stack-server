import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req: Request, res: Response, next: NextFunction){
    const token = req.header('x-auth-token')

    if(!token){
        return res.status(401).json({ msg:'Authorization denied, token missing'})
    }

    // verifying token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        // req.user = decoded.user;
        // req.body.push(decoded.user);
        // req.outputData.push(decoded.user);
        console.log('decoded.user', decoded.user)
        req.rawTrailers.push(decoded.user.id);
        next();
    } catch (err) {
         res.status(401).json({msg:'Invalid token'})       
    }
}