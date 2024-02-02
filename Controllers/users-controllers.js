const HttpError = require('../models/http-error');
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async(req,res,next)=>{
    const {name,email,password} = req.body;

    let hashedPassword;
    hashedPassword=  await bcrypt.hash(password,12)
    const createUser = new user({
        name,
        email,
        password:hashedPassword
    });

    let token;
    token = jwt.sign({user:createUser},process.env.TOKEN_KEY,{expiresIn:'1h'});

    await createUser.save();
    res.status(201).json({user:createUser,token:token});
};

//login
const login = async(req,res,next)=>{
    const {email,password} = req.body;
    const findUser = await user.findOne({email:email});
    if(!findUser){
        const error = new HttpError('Invalid User',401);
        return next(error);
    }
    const isValidPassword = await bcrypt.compare(password,findUser.password);
    if(!isValidPassword){
        const error = new HttpError('Invalid User',401);
        return next(error);
    }

    let token;
    token = jwt.sign({user:findUser},process.env.TOKEN_KEY,{expiresIn:'1h'});

    res.status(200).json({User:findUser,token:token});
}

exports.signup = signup;
exports.login = login;