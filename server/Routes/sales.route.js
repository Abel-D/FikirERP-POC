const express =require('express');
const route = express.Router();
const sales_controller = require('../controllers/sales.controller');

router.post('/add', sales_controller.sales_add);

router.get('/', sales_controller.sales_getAll);

router.get('/:id', sales_controller.sales_getById);

router.put('/:id', sales_controller.sales_update);

router.delete('/:id', sales_controller.sales_delete);

module.exports = router;