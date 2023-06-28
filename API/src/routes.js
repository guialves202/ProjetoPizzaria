import PizzaController from './app/controllers/PizzaController.js';
import { Router } from 'express';

const router = Router();

//router.post('/order', PizzaController.store);
router.get('/orders', PizzaController.index);
//router.put('/orders', PizzaController.update);
//router.delete('/orders', PizzaController.delete);

export default router;
