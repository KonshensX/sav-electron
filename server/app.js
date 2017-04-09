let express = require('express');
let expressApp = express();
let post = require('./model/post');


/**
 * Routes are going to be here
 */
expressApp.get('/', function (request, response) {

});

expressApp.get('/posts', function (request, response, callback) {

    let posts = post.getPosts(function (response) {
        callback(JSON.stringify(response));
    });
    response.json(posts);
});




//Server stuff
var server = expressApp.listen(2020, function () {
	console.log('This server is running on post 2020');
});
