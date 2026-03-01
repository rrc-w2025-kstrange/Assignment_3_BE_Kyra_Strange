import { Request, Response } from "express";
import { getAllEventsService, getProductByIdService, createNewEvent, updateProductService, deleteProductService } from "../services/eventService";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { successResponse } from "../models/responseModel";


export const getAllEvents = (req: Request, res: Response) => {
    try {
        const events: string[] = getAllEventsService();

        res.status(HTTP_STATUS.OK).json(successResponse(events));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error"});
    }
}

export const getEventById = (req: Request, res: Response) => {
    let result = getProductByIdService()
    res.status(200).json(result);
};

export const createEvent = (req: Request, res: Response): void => {
  let result = createNewEvent("new event")

  res.status(HTTP_STATUS.CREATED).send(result)
};

export const updateEvent = (req: Request, res: Response) => {
    let result = updateProductService(12, "test")
    res.status(200).json(result);
};
export const deleteEvent = (req: Request, res: Response) => {
    let result = deleteProductService(65)
    res.status(200).json(result);
};