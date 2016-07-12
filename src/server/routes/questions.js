var router = require('express').Router();
var formdata = require('../db/formdata.json');

/**
 * docker url...
 * http://192.168.99.100:3000/questions
 */
module.exports = router;

//
router.get('/', function (req, res) {
  res.json(formdata);
});



//
router.post('/:answers', function (req, res) {
  const answers = req.params.answers;
  const body = req.body;

  res.json({ data: 'Thank you for your response: ' + answers, message: body.message });
});
