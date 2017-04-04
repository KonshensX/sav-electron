let mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zendone'
})

module.exports.getPosts = function () {
    connection.connect()
    data = null
    connection.query('SElECT * FROM posts', function (error, results, fields) {
        if (error) {
            console.log(error)
        }
        data = (JSON.stringify(results))
    })
    connection.end()
    return data
}
