var request = require("supertest");
var app = require("../app.js");
var assert = require('assert');

describe("GET /", function(){
    it('  respond with hello world, good, great, yea 11', function(done){

        //navigate to root and check the response is "hello world"
        request(app).get("/").expect("mukum",done);
    });

    setTimeout(function () {
        console.log('timeout completed great'); 
        process.exit();
    }, 3000);
    
});

describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });