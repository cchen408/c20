var express = require('express');
var router = express.Router();

/**
 * get historic data
 */
router.get('/', function(req, res, next) {
    res.send({});
});


/**
 *
 */
router.get('/refresh', function(req, res, next) {

});

module.exports = router;
