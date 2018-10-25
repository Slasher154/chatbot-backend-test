var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(JSON.stringify(req.body, undefined, 2))
  res.json({ title: 'Welcomes' })
});

router.post('/webhook', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 2))
    res.json({ title: 'Post message' })
});


module.exports = router;
