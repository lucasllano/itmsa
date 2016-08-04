
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    root: rootPath,
    app: {
        name: 'ITMSA'
    }
  },
  production: {
    root: rootPath,
    app: {
        name: 'ITMSA'
    }
  },
  mailer: {
    auth: {
      user: 'info@itmsa.com.ar',
      pass: 'contraseñainicial'
    },
    defaultFromAddress: 'ITM S.A. <info@itmsa.com.ar>'
  }
};
