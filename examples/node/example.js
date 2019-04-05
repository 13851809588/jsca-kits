require('jquery');
require('bluebird');


var JscaPKI = require('./jsca-kits-1.0.0.js');
var out = function() {
     JscaPKI.getGxca('http://localhost:3000/users',{type:2,postid:1000}).then(function (data) {
                console.log("data1=" + JSON.stringify(data));
            }, function (error) {
                console.log(error)
                alert(error.status);
            }
        );
};
out();