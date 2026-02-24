import { Request, Response } from "express";
import { getHealthCheckService, getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService } from "../services/productService";


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

export const createProduct = (req: Request, res: Response) => {
    let result = createProductService("test")
    res.status(200).json(result);
};

export const updateProduct = (req: Request, res: Response) => {
    let result = updateProductService(12, "test")
    res.status(200).json(result);
};
export const deleteProduct = (req: Request, res: Response) => {
    let result = deleteProductService(65)
    res.status(200).json(result);
};