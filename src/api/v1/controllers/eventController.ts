import { Request, Response } from "express";
import { getHealthCheckService, getAllProductsService, getProductByIdService, createNewEvent, updateProductService, deleteProductService } from "../services/eventService";
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

export const createEvent = (req: Request, res: Response): void => {
  let result = createNewEvent("new event")

  res.status(HTTP_STATUS.CREATED).send(result)
};

export const updateProduct = (req: Request, res: Response) => {
    let result = updateProductService(12, "test")
    res.status(200).json(result);
};
export const deleteProduct = (req: Request, res: Response) => {
    let result = deleteProductService(65)
    res.status(200).json(result);
};