

var express = require('express');
//


var app = express();




app.get('/', function(req, res){
    // request object(req) represents the HTTP request
    // and has properties for the request query string,
    // parameters, body, HTTP headers, etc.


    //response object represents the HTTP response that
    // the Express app sends when it receives an HTTP request

    res.send("Hello World!");
    });



app.listen(3000);
