const express = require('express');
const router = express.Router();

const despesa = require('../controllers/despesa.controller');

router.get('/', despesa.getDespesas);
router.post('/', despesa.createDespesa);
router.get('/:id', despesa.getDespesa);
router.put('/:id', despesa.editDespesa);
router.delete('/:id', despesa.deleteDespesa);

module.exports = router;