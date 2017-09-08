var express = require('express');
var router = express.Router();


//Middleware for single request
router.use('/singlemid', function (req, res, next) {
    console.log("Single request " + Date.now());
    next();
});

router.get('/singlemid', function (req, res) {
    res.send('Things');
});

// -----------------------------------------------------

//Middleware for all requests - WORKS
router.use(function (req, res, next) {
    console.log("A new request received at " + Date.now());
    res.on("finish", function () {
    });

    next();
});

router.get('/', function (req, res) {
    res.send('GET route on things.');
});

router.post('/', function (req, res) {
    res.send('POST route on things.');
});

router.get('/:id', function (req, res) {
    res.send("The id you specified is " + req.params.id);
});

// regEx --> regular expressions
// nie dziala :(
router.get('/things/:id([0-9]{5})', function (req, res) {
    res.send('id: ' + req.params.id);
});

//customised 404 error --> should be placed as a last route
router.get('*', function (req, res) {
    res.send("Sorry, this is an invalid URL");
});

module.exports = router;