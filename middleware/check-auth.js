const HttpError = require("../models/http-error");

const jwt = require('jsonwebtoken');

module.exports = (res,req,next) => {
    try{
        const token = req.headers.authorization.split(" ");
    if(!token){
        const error = new HttpError('authentication failed',401);
        return next(error);
    }
    const decodedToken = jwt.verify(token,"supersecretkey");
    req.userData = {user:decodedToken.user};
    next();
    } catch(err){
        const error = new HttpError('authentication failed',401);
        return next(error);
    }
    
}