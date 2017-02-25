// Imports
var express = require('express');
var bodyParser = require('body-parser')

// Initializations
var app = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var router = express.Router();

var port = process.env.PORT || 3000;

// Initial dummy route for testing
router.get('/', function(req, res) {
	res.render('index', {title:"Scratch Pad", message: "Testing Out Jade"})
});

router.get('/reverse', function(req, res) {
	console.log(req.query.string);
	res.send(200);
});

// Register all our routes
app.use(router);

// Start the server
app.listen(port, function() {
	console.log("Hello, from the server on port " + port);
});
