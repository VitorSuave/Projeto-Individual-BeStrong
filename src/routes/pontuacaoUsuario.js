var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/usuarioQuizController");

router.get("/ultimas", function (req, res) {
   pontuacaoController.buscarUltimasPontuacoes(req, res);
});

router.get("/tempo-real", function (req, res) {
    pontuacaoController.buscarPontuacoesEmTempoReal(req, res);
})

router.post("/cadastrarPontos", function (req, res) {
    pontuacaoController.cadastrarPontos(req, res);
})

router.get("/pontuacaoUsuario/:idUsuario", function(req,res){
    pontuacaoController.pontuacaoUsuario(req,res)
})

router.get("/estatisticasGeral", function(req, res) {
    pontuacaoController.estatisticasGeral(req, res);
});

router.get("/media-acertos-usuario/:idUsuario", function(req, res){
    pontuacaoController.mediaAcertosUsuario(req, res);
});


module.exports = router;