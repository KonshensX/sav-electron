let express = require('express');
let expressApp = express();
let post = require('./model/post');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

expressApp.use(bodyParser.json()); // for parsing application/json
expressApp.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


/**
 * Routes are going to be here
 */
expressApp.get('/', function (request, response) {

});

expressApp.get('/posts', function (request, response, callback) {

    post.getPosts(function (data) {
		response.json(data);	
    });
});


expressApp.post('/createpost', function (request, response, callback) {

	post.createPost(request.body, function (data) {
		response.json(data);
	});

	
});



//Server stuff
var server = expressApp.listen(2020, function () {
	console.log('This server is running on post 2020');
});
