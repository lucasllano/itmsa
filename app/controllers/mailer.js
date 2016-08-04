'use strict';

var config = require('../../config/config.js');
var nodemailer = require('nodemailer');
var path = require('path');

var EmailAddressRequiredError = new Error('email address required');

// create a defaultTransport using gmail and authentication that are
// storeed in the `config.js` file.
var defaultTransport = nodemailer.createTransport('SMTP', {
 service: 'zoho',
 auth: {
   user: config.mailer.auth.user,
   pass: config.mailer.auth.pass
 }
});

exports.sendOne = function (req, res, fn) {

    var transport = defaultTransport
        , email   = req.body.email
        , name    = req.body.name
        , message = req.body.message
        , subject = req.body.subject;

    transport.sendMail({
      from: config.mailer.defaultFromAddress,
      to: 'info@itmsa.com.ar',
      subject: "Mensaje desde web",
      html: '<p>Nombre: ' + name + '</p><br><p>Email: ' + email + '</p><br><p>Mensaje:' + message + '</p>',
     // generateTextFromHTML: true,
     //text: 'testetests'
   }, function (err, responseStatus) {
     if (err) {
       console.log("error al enviar mail: ", err)
       res.redirect('/error');
     }
     res.redirect('/thanks');
   });
}