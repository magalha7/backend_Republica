const express = require('express');
const router = express.Router();

const republica = require('../controllers/republica.controller');

router.get('/', republica.getRepublicas);
router.post('/', republica.createRepublica);
router.get('/:id', republica.getRepublica);
router.put('/:id', republica.editRepublica);
router.delete('/:id', republica.deleteRepublica);

module.exports = router;