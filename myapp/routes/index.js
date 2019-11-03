var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET shop page. */
router.get('/shop', function(req, res, next) {
  res.render('shop');
});

/* GET shop page. */
router.get('/cart', function(req, res, next) {
  res.render('cart');
});

/* GET shop page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET shop page. */
router.get('/my-account', function(req, res, next) {
  res.render('my-account');
});

/* GET checkout page. */
router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

/* GET product-detail page. */
router.get('/product-details', function(req, res, next) {
  res.render('product-details');
});


/* GET forget-pass page. */
router.get('/forget-pass', function(req, res, next) {
  res.render('forget-pass');
});
module.exports = router;
