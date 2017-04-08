let mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'zendone'
});

connection.connect();

module.exports.getPosts = function (callback) {
    connection.query('SElECT * FROM posts', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        callback(results);
    });
};

