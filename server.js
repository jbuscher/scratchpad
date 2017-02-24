// Imports
var express = require('express');

// Initializations
var app = express();
var router = express.Router();

var port = process.env.PORT || 3000;

// Initial dummy route for testing
router.get('/', function(req, res) {
	res.end('Hello, World!');
});

// Register all our routes
app.use(router);

// Start the server
app.listen(port, function() {
	console.log("Hello, from the server on port " + port);
});
