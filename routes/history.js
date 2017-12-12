var express = require('express');
var router = express.Router();

/**
 * get historic data
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 *
 */
router.get('/refresh', function(req, res, next) {

});

module.exports = router;
