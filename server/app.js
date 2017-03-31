var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zendone'
})

connection.connect()

connection.query('SElECT * FROM posts', function (error, results, fields) {
    if (error) throw error
    	
})
