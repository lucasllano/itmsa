exports.index = function (req, res, next) {

	res.render('index.html');
};

exports.error = function (req, res, next) {

	res.render('error.html');
};

exports.thanks = function (req, res, next) {

	res.render('thanks.html');
};