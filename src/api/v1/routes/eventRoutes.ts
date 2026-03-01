import { Router } from 'express';
import { getAllEvents, getProductById, createEvent, updateProduct, deleteProduct} from '../controllers/eventController';
import { validateRequest } from "../middleware/validateRequest";
import { createProductSchema } from "../validation/productValidation";

const router: Router = Router();

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
