import { Router } from 'express';
import { getHealthCheck, getAllProducts, getProductById, createProductController, updateProduct, deleteProduct} from '../controllers/productController';
import { validateRequest } from "../middleware/validateRequest";
import { createProductSchema } from "../validation/productValidation";

const router: Router = Router();

router.get('/health', getHealthCheck);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', validateRequest(createProductSchema), createProductController);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
