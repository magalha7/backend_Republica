const express = require('express');
const router = express.Router();

const tarefa = require('../controllers/tarefa.controller');

router.get('/', tarefa.getTarefas);
router.post('/', tarefa.createTarefa);
router.get('/:id', tarefa.getTarefa);
router.put('/:id', tarefa.editTarefa);
router.delete('/:id', tarefa.deleteTarefa);

module.exports = router;