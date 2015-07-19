var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  //es views/index.ejs o es solo index??
  res.render('index.ejs', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
