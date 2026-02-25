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

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    return res.status(HTTP_STATUS.CREATED).json({  
      message: "Product created",
      data: product,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message }); 
  }
};

export const updateProduct = (req: Request, res: Response) => {
    let result = updateProductService(12, "test")
    res.status(200).json(result);
};
export const deleteProduct = (req: Request, res: Response) => {
    let result = deleteProductService(65)
    res.status(200).json(result);
};