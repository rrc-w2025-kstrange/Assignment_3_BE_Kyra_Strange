import { Request, Response } from "express";
import { getAllItemsService } from "../services/productService";


export const getAllItems = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};

export const createItem = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};

export const updateItem = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};
export const deleteItem = (req: Request, res: Response) => {
    let result = getAllItemsService()
    res.status(200).json(result);
};