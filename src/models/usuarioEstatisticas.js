var database = require("../database/config");

function buscarUltimasPontuacoes(idPontuacao) {
    var instrucaoSql = `SELECT 
                        pontos, 
                        datahora,
                        DATE_FORMAT(datahora,'%H:%i:%s') as datahora_grafico
                        FROM pontuacao
                        WHERE fkUsuario = ${idUsuario}
                        ORDER BY id DESC LIMIT 7`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacoesEmTempoReal(idPontuacao) {
    var instrucaoSql = `SELECT 
                        acertos,
                        DATE_FORMAT(datahora,'%H:%i:%s') as datahora_grafico, 
                        fkUsuario
                        FROM pontuacao 
                        WHERE fkUsuario = ${idUsuario} 
                        ORDER BY idPontuacao DESC 
                        LIMIT 3`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarPontos(idUsuario, acertos, erros) {
    var instrucaoSql = `INSERT INTO pontuacao (acertos, erros, datahora, fkUsuario) VALUES
        (${acertos}, ${erros}, now(), ${idUsuario})`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuacaoUsuario(idUsuario) {
    var instrucaoSql = `SELECT idPontuacao, acertos, erros, datahora, fkUsuario
                        FROM pontuacao WHERE fkUsuario = ${idUsuario};`;
    return database.executar(instrucaoSql);
}

// Nova função para calcular as estatísticas gerais
function estatisticasGeral() {
    var instrucaoSql = `
        SELECT 
            SUM(acertos) AS totalAcertos,
            COUNT(DISTINCT fkUsuario) AS totalUsuarios,
            AVG(acertos) AS mediaAcertos
        FROM pontuacao;
    `;

    console.log("Executando a instrução SQL para estatísticas gerais: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function mediaAcertosUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            AVG(acertos) AS mediaAcertos
        FROM pontuacao
        WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL para média de acertos do usuário: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasPontuacoes,
    buscarPontuacoesEmTempoReal,
    cadastrarPontos,
    pontuacaoUsuario,
    estatisticasGeral,
    mediaAcertosUsuario,
}
