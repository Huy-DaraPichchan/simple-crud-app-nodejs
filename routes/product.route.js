const express = require('express')
const Product = require('../models/product.model.js')
const router = express.Router()


const { getProducts, getProductById, createProduct, updateProductById, deleteProductById } = require('../controllers/product.controller.js')


router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);


module.exports = router;