
let express = require('express')
let expressApp = express()
let mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zendone'
})

/**
* Routes are going to be here
*/
expressApp.get('/', function (request, response) {
	console.log('reached')

	response.setHeader('Content-Type', 'application/json')

	response.send(JSON.stringify({
		data: 'real shit fam'
	}))
})

expressApp.get('/posts', function (request, response) {

	console.log(request)
	connection.connect()

	connection.query('SElECT * FROM posts', function (error, results, fields) {
	    if (error) throw error
    	response.setHeader('Content-Type', 'application/json')
	    response.send(JSON.stringify(results))
	})
	connection.end()
})



//Server stuff 
var server = expressApp.listen(8080, function () {
	console.log('This server is running on post 8080')
})