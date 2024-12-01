const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');
const UsuarioQuiz = require('../models/usuarioQuizModel');

// Rota para criar um novo quiz
router.post('/criar', async (req, res) => {
    const { titulo, descricao } = req.body;
    try {
        await Quiz.criarQuiz(titulo, descricao);
        res.status(201).send('Quiz criado com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao criar quiz');
    }
});

// Rota para listar quizzes
router.get('/listar', async (req, res) => {
    try {
        const [rows] = await Quiz.listarQuizzes();
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao listar quizzes');
    }
});

// Rota para associar um quiz a um usuário
router.post('/associar', async (req, res) => {
    const { usuarioId, quizId } = req.body;
    try {
        await UsuarioQuiz.associarQuizAoUsuario(usuarioId, quizId);
        res.status(201).send('Quiz associado ao usuário com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao associar quiz ao usuário');
    }
});

// Rota para marcar um quiz como concluído
router.put('/concluir', async (req, res) => {
    const { usuarioId, quizId } = req.body;
    try {
        await UsuarioQuiz.marcarQuizConcluido(usuarioId, quizId);
        res.status(200).send('Quiz marcado como concluído!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao marcar quiz como concluído');
    }
});

// Rota para listar quizzes associados a um usuário
router.get('/usuario/:id', async (req, res) => {
    const usuarioId = req.params.id;
    try {
        const [rows] = await UsuarioQuiz.listarQuizzesPorUsuario(usuarioId);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao listar quizzes do usuário');
    }
});

module.exports = router;
