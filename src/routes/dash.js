const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Rota para obter dados da dashboard
router.get('/dados', dashboardController.obterDadosDashboard);

module.exports = router;
