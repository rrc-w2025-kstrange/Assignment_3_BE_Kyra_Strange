import { Router } from 'express';
import { getItemById, createItem } from '../controllers/productController';

const router: Router = Router();

router.get('/:id', getItemById);
router.post('/', createItem);

export default router;
