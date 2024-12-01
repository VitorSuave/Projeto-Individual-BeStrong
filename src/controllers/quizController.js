const db = require('../database/config');

module.exports = {
    // Criar um novo quiz
    criarQuiz: (req, res) => {
        const { titulo, descricao } = req.body;

        const query = `INSERT INTO Quiz (titulo, descricao) VALUES (?, ?)`;

        db.query(query, [titulo, descricao], (err, result) => {
            if (err) {
                console.error("Erro ao criar quiz:", err);
                res.status(500).send("Erro no servidor");
            } else {
                res.status(201).send({ message: "Quiz criado com sucesso!", id: result.insertId });
            }
        });
    },

    // Listar todos os quizzes
    listarQuizzes: (req, res) => {
        const query = `SELECT * FROM Quiz`;

        db.query(query, (err, results) => {
            if (err) {
                console.error("Erro ao listar quizzes:", err);
                res.status(500).send("Erro no servidor");
            } else {
                res.status(200).json(results);
            }
        });
    },

    // Associar usuário ao quiz
    associarUsuarioQuiz: (req, res) => {
        const { usuario_id, quiz_id } = req.body;

        const query = `INSERT INTO UsuarioQuiz (usuario_id, quiz_id) VALUES (?, ?)`;

        db.query(query, [usuario_id, quiz_id], (err, result) => {
            if (err) {
                console.error("Erro ao associar usuário ao quiz:", err);
                res.status(500).send("Erro no servidor");
            } else {
                res.status(201).send({ message: "Usuário associado ao quiz com sucesso!" });
            }
        });
    },

    // Marcar quiz como concluído
    marcarConcluido: (req, res) => {
        const { usuario_id, quiz_id } = req.body;

        const query = `UPDATE UsuarioQuiz SET concluido = TRUE WHERE usuario_id = ? AND quiz_id = ?`;

        db.query(query, [usuario_id, quiz_id], (err, result) => {
            if (err) {
                console.error("Erro ao marcar quiz como concluído:", err);
                res.status(500).send("Erro no servidor");
            } else if (result.affectedRows === 0) {
                res.status(404).send({ message: "Relacionamento não encontrado" });
            } else {
                res.status(200).send({ message: "Quiz marcado como concluído com sucesso!" });
            }
        });
    }
};
