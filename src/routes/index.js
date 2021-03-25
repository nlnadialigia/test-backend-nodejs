import { Router } from 'express';
import controller from '../controllers/ProductsController.js';

const routes = Router();

routes.post('/', controller.create);
routes.get('/', controller.findAll);
routes.get('/:id', controller.findOne);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.remove);

export default routes;
