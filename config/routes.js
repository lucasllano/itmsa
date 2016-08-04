
/*!
 * Module dependencies.
 */

/**
 * Controllers
 */

var site            = require('../app/controllers/site')
	, mailer        = require('../app/controllers/mailer');

/**
 * Route middlewares
 */

/**
 * Expose routes
 */

module.exports = function (app, passport) {

    //App
    app.get(    '/',                    site.index);
    app.get(	'/error',				site.error);
    app.get(	'/thanks',				site.thanks);
    app.post(	'/mail',				mailer.sendOne);
};

