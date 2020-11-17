var request = require("supertest");
var app = require("../app.js");

describe("GET /", function(){
    it('respond with hello world, good, great, yea 11', function(done){

        //navigate to root and check the response is "hello world"
        request(app).get("/").expect("mukum",done);
    });
});