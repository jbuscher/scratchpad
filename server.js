// Load required packages
var express = require('express');

// Create our Express application
var app = express();

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
router.get('/', function(req, res) {
	res.end('Hello, World!');
});

// Register all our routes
app.use(router);

// Start the server
app.listen(80, function() {
	console.log("Hello, from the server");
});
