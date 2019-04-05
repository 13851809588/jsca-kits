require('jquery');
require('bluebird');


var JscaPKI = require('./jsca-kits-1.0.0.js');
var out = function() {
     process.stdout.write('This is the result for numtoword(1) === ' + JscaPKI.add(1,2));
};
out();