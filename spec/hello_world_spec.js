var request = require("request");
var helloWorld = require("../server.js")

var base_url = "http://localhost:8080/"

describe("Hello World Server", function() {
	describe("GET /", function() {
		it("returns status code 200", function(done) {
			request.get(base_url, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});

		it("returns a body of \"Hello, World\"", function(done) {
			request.get(base_url, function(error, response, body) {
				expect(body).toBe("Hello, World!");
				done();
			});
		});

		it("will definitely fail", function(done) {
			request.get(base_url, function(error, response, body) {
				expect(body).toBe("Goodbye, Cruel World!");
				done();
			});	
		});
	});
});