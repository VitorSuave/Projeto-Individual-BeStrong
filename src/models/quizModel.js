const database = require('../database/config');

const Quiz = {
    criarQuiz: (titulo, descricao) => {
        const query = `INSERT INTO quiz (titulo, descricao) VALUES (?, ?)`;
        return database.execute(query, [titulo, descricao]);
    },
    listarQuizzes: () => {
        const query = `SELECT * FROM quiz`;
        return database.execute(query);
    },
    buscarQuizPorId: (id) => {
        const query = `SELECT * FROM quiz WHERE id = ?`;
        return database.execute(query, [id]);
    }
};

module.exports = Quiz;
