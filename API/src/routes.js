import PizzaController from './app/controllers/PizzaController.js';
import { Router } from 'express';

const router = Router();

router.post('/order', PizzaController.store);
router.post('/orders', PizzaController.index);
router.put('/order', PizzaController.update);
router.delete('/order', PizzaController.delete);
router.get('/statistic', PizzaController.statistic)

export default router;
