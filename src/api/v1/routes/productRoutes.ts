import { Router } from 'express';
import { getHealthCheck, getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../controllers/productController';

const router: Router = Router();

router.get('/health', getHealthCheck);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
