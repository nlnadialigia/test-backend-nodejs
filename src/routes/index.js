import { Router } from 'express';
import controller from '../controllers/ProductsController.js';

const router = Router();

router.post('/products', controller.create);
router.get('/products', controller.findAll);
router.get('/products/search', controller.findSome);
router.put('/products/:id', controller.update);
router.delete('/products/:id', controller.remove);

export { router };
