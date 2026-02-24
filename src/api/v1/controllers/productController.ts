import { Request, Response } from "express";
import { getAllItemsService } from "../services/productService";


export const getHealthCheck = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};

export const getAllProducts = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};

export const getProductById = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};

export const createProduct = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};

export const updateProduct = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};
export const deleteProduct = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};