import { Request, Response } from "express";
import { getHealthCheckService, getAllProductsService, getProductByIdService, createProduct, updateProductService, deleteProductService } from "../services/productService";
import { HTTP_STATUS } from "../../../constants/httpConstants";


export const getHealthCheck = (req: Request, res: Response) => {
    let result = getHealthCheckService()
    res.status(200).json(result);
};

export const getAllProducts = (req: Request, res: Response) => {
    let result = getAllProductsService()
    res.status(200).json(result);
};

export const getProductById = (req: Request, res: Response) => {
    let result = getProductByIdService()
    res.status(200).json(result);
};

export const createProductController = async (req: Request, res: Response): Promise<void> => {
  const newProduct = await createProduct(req.body);
  
  res.status(HTTP_STATUS.CREATED).json({
    message: "Product created",
    data: {
    ...newProduct,
    createdAt: (newProduct.createdAt as any).toDate().toISOString(),
    updatedAt: (newProduct.updatedAt as any).toDate().toISOString(),
  },
});
};

export const updateProduct = (req: Request, res: Response) => {
    let result = updateProductService(12, "test")
    res.status(200).json(result);
};
export const deleteProduct = (req: Request, res: Response) => {
    let result = deleteProductService(65)
    res.status(200).json(result);
};