import { Router } from 'express';
import productControllers from '../controllers/product.controller.js';



const { getProducts, getProductById, createProduct, updateProductById, deleteProductById } = productControllers
const router = Router()




router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);


export default router;