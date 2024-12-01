var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

const quizRoutes = require('./quiz');

router.use('/quiz', quizRoutes);


module.exports = router;