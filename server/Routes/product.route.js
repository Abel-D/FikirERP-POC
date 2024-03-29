const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.get('/', product_controller.product_getAll);

router.get('/:id', product_controller.product_getById);

router.put('/:id', product_controller.product_update);

router.delete('/:id', product_controller.product_delete);

module.exports = router;