let express = require('express');
let expressApp = express();
let post = require('./model/post');


/**
 * Routes are going to be here
 */
expressApp.get('/', function (request, response) {

});

expressApp.get('/posts', function (request, response) {
    console.log(post.testcase());
	console.error('Data : ');
});




//Server stuff
var server = expressApp.listen(2020, function () {
	console.log('This server is running on post 2020');
});
