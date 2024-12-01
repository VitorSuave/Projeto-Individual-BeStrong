const database = require('../database/config');

const UsuarioQuiz = {
    associarQuizAoUsuario: (usuarioId, quizId) => {
        const query = `INSERT INTO usuario_quiz (usuario_id, quiz_id) VALUES (?, ?)`;
        return database.execute(query, [usuarioId, quizId]);
    },
    marcarQuizConcluido: (usuarioId, quizId) => {
        const query = `UPDATE usuario_quiz SET concluido = true WHERE usuario_id = ? AND quiz_id = ?`;
        return database.execute(query, [usuarioId, quizId]);
    },
    listarQuizzesPorUsuario: (usuarioId) => {
        const query = `
            SELECT q.* 
            FROM quiz q
            JOIN usuario_quiz uq ON q.id = uq.quiz_id
            WHERE uq.usuario_id = ?
        `;
        return database.execute(query, [usuarioId]);
    }
};

module.exports = UsuarioQuiz;
