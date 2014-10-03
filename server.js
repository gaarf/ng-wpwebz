var pkg = require('./package.json'),
    morgan = require('morgan'),
    color = {
      hilite: function (v) { return '\x1B[7m' + v + '\x1B[27m'; },
      green: function (v) { return '\x1B[40m\x1B[32m' + v + '\x1B[39m\x1B[49m'; },
      pink: function (v) { return '\x1B[40m\x1B[35m' + v + '\x1B[39m\x1B[49m'; }
    };

var HTTP_PORT = 8080,
    CORS_PORT = 8081;

var httpLabel = color.green('http-server'),
    corsLabel = color.pink('cors-proxy'),
    httpLogger = morgan(httpLabel+' :method :url', {immediate: true}),
    corsLogger = morgan(corsLabel+' :method :url :cooprcred :status', {
      skip: function(req, res) { return req.method === 'OPTIONS' }
    });

console.log(color.hilite(pkg.name) + ' v' + pkg.version + ' starting up...');

/**
 * HTTP server
 */
require('http-server')
  .createServer({
    root: __dirname + '/dist',
    before: [
      httpLogger
    ]
  })
  .listen(HTTP_PORT, '0.0.0.0', function () {
    console.log(httpLabel+' listening on port %s', HTTP_PORT);
  });


/**
 * CORS proxy
 */
require('cors-anywhere')
  .createServer({
    requireHeader: ['x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  })
  .on('request', function (req, res) {
    corsLogger(req, res, function noop() {} );
  })
  .listen(CORS_PORT, '0.0.0.0', function() {
    console.log(corsLabel+' listening on port %s', CORS_PORT);
  });
