var pontuacaoModel = require("../models/usuarioEstatisticas");

function buscarUltimasPontuacoes(req, res) {
    const limite_linhas = 3;
    var idPontuacao = req.params.idPontuacao;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    pontuacaoModel.buscarUltimasPontuacoes(idPontuacao, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas pontuacoes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPontuacoesEmTempoReal(req, res) {
    var idPontuacao = req.params.idPontuacao;

    console.log(`Recuperando pontuacoes em tempo real`);

    pontuacaoModel.buscarPontuacoesEmTempoReal(idPontuacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarPontos(req, res) {
    // Recuperando valores enviados pelo front-end
    var idUsuario = req.body.idUsuario;
    var acertos = req.body.acerto;
    var erros = req.body.erros;

    // Validando os dados
    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Os ACERTOS estão undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Os ERROS estão undefined!");
    } else {
        pontuacaoModel.cadastrarPontos(idUsuario, acertos, erros)
            .then(
                function (resultado) {
                    res.status(200).json({ mensagem: "Pontos cadastrados com sucesso!", resultado });
                }
            )
            .catch(
                function (erro) {
                    console.log("\nHouve um erro ao cadastrar os pontos:", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pontuacaoUsuario(req,res){
    var idUsuario = req.params.idUsuario;
    
    pontuacaoModel.pontuacaoUsuario(idUsuario)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
                }
            )
            .catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

// Nova função para retornar a média de acertos de um usuário específico
function mediaAcertosUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    pontuacaoModel.mediaAcertosUsuario(idUsuario)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
                }
            )
            .catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
}



module.exports = {
    buscarUltimasPontuacoes,
    buscarPontuacoesEmTempoReal,
    cadastrarPontos,
    pontuacaoUsuario,
    mediaAcertosUsuario,
};
