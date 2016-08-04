/**
 * Module dependencies.
 */
process.env.PWD = process.cwd()

// Then
var express     = require('express')
    path        = require('path');

module.exports = function (app, config) {
    app.set('views', config.root + '/public');
    app.engine('html', require('ejs').renderFile);
    // app.use(express.static(path.join(config.root, 'public')));
    app.use(express.static(process.env.PWD + '/public'));

    app.use(function(req, res, next){
	  if (req.is('text/*')) {
	    req.text = '';
	    req.setEncoding('utf8');
	    req.on('data', function(chunk){ req.text += chunk });
	    req.on('end', next);
	  } else {
	    next();
	  }
	});
    app.use(express.bodyParser());
}
