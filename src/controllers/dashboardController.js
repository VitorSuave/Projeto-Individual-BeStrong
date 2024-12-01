const config = require('../database/config');

// Busca os dados para os gráficos
async function obterDadosDashboard(req, res) {
    try {
        // Query para acertos por usuário
        const queryAcertosUsuario = `
            SELECT usuario.nome, SUM(resultado_quiz.acertos) AS total_acertos 
            FROM resultado_quiz
            JOIN usuario ON resultado_quiz.usuario_id = usuario.id
            GROUP BY usuario.nome
        `;

        // Query para maior pontuação por quiz
        const queryMaiorPontuacao = `
            SELECT quiz.titulo, MAX(resultado_quiz.acertos) AS maior_pontuacao 
            FROM resultado_quiz
            JOIN quiz ON resultado_quiz.quiz_id = quiz.id
            GROUP BY quiz.titulo
        `;

        // Executa as queries
        const acertosUsuario = await config.executar(queryAcertosUsuario);
        const maiorPontuacao = await config.executar(queryMaiorPontuacao);

        // Responde com os dados em JSON
        res.json({ acertosUsuario, maiorPontuacao });
    } catch (error) {
        console.error('Erro ao buscar dados para a dashboard:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

module.exports = { obterDadosDashboard };
