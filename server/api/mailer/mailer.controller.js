'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');

// Get list of mailers
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function(req, res) {
  debugger;
  var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD
    }
});

//remove details
var mailOptions = {
    from:  process.env.EMAIL_LOGIN, // sender address
    to:  process.env.EMAIL_LOGIN, // list of receivers
    subject: 'A user query from michaeldsharp.com', // Subject line
    text: 'message from: '+ req.body.email + (req.body.name != "" ? '(' + req.body.name + ')' : '')  + '\n\n' + req.body.message // plaintext body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    
    res.json({message : "Message sent!"});
});




};
