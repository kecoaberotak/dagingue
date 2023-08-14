const asyncHandler = require('express-async-handler');

// jwt
const jwt = require("jsonwebtoken");
const secret = 'IARZIMZEhm0l0qw3jLNqiFVuQkSrc1UqzKzmgob8cwF5v1NxQR962MzdAH5l6ay';

// models
const AdminModel = require('../models/Admin');

// login
const login = asyncHandler(async (req, res) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    sameSite: "none",
    secure: true, // this was 'false' before. 'true' works.
  };

  const {username, password} = req.body;
  const adminDoc =  await AdminModel.findOne({username});
  if(adminDoc){
    const passwordOk = adminDoc.password === password;
    if(passwordOk) {
      // logged in
      jwt.sign(
        {username,id: adminDoc._id,}, 
        secret,
        {}, 
        (err, token) => {
          if(err) throw err;
          res.cookie('token', token, cookieOptions).status(200).json({message:"login success"});
        }
      )
    }else {
      res.status(400);
      throw new Error("wrong password");
    }
  }else {
    res.status(400);
    throw new Error("wrong username");
  }
});


// token
const token = (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if(err) {
      res.status(400);
      throw new Error("can't get token");
    }
    res.status(200).json(info);
  });
};


// logout
const logout = (req, res) => {
  res.cookie('token', '').status(200).json({message: 'logout success'});
};


module.exports = {
  login,
  token,
  logout
};