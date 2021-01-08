// importa o express para poder utilizar seus metodos
const express = require('express');
// metodo router para gerenciar as rotas da aplicação
const router = express.Router();
// importa as operações definidas em sensorController.js (get,post,delete,update)
const SensorController = require('../controllers/sensorController.js');

// quando estiver na url /dados fazendo um post ele chama o metodo insert, se for get chama SearchAll e assim por diante
router.post('/dados', SensorController.Insert);
router.get('/dados', SensorController.SearchAll);

module.exports = router;