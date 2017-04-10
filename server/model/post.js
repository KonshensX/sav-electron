let mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'electron-app'
});

connection.connect();

//Get all the posts from the database
module.exports.getPosts = function (callback) {
    connection.query('SElECT * FROM posts', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        callback(results);
    });
};


//Create a new post in the database
module.exports.createPost = function (data, callback) {
    connection.query ('INSERT INTO posts SET ?', data, function (err, results, fields) {
        if (err) throw err
        if (results.affectedRows) {
            callback({
                'message': 'Successfully added'
            });
        }
    });
};