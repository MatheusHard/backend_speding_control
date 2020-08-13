const express = require('express');
const avaliacaoController = require('../controllers/controllerAvaliacao');
const adminController = require('../controllers/controllerAdmin');
const cidadeController = require('../controllers/controllerCidade');
const ufController = require('../controllers/controllerUf');
const setorController = require('../controllers/setorController');
const funcionarioController = require('../controllers/controllerFuncionario');
const viajemController = require('../controllers/controllerViajem');

//Rotas
const router = express.Router();


/*****UF******/

router.post('/uf', ufController.index);


/*****CIDADE******/

router.post('/cidade', cidadeController.index);
router.post('/cidade/add', cidadeController.add);

/*****SETOR******/

router.post('/setor', setorController.index);

/*****FUNCIONARIO******/

router.post('/funcionario', funcionarioController.index);


/*****VIAJEM******/

router.post('/viajem', viajemController.index);
router.post('/viajem/add', viajemController.add);


/*****ADMIN******/

router.get('/admin', adminController.index);



module.exports = router;