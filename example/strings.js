var through = require('through');
var utf8Stream = require('../');

var buf = Buffer('☠ ￡');

var d = utf8Stream();
d.pipe(through(function (s) {
    console.dir(s.toString('utf8'));
}));

for (var i = 0; i < buf.length; i++) {
    d.write(buf.slice(i, i + 1));
}
d.end();
