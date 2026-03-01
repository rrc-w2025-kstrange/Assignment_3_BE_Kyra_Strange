import { Request, Response } from "express";
import { getAllEventsService, getEventByIdService, createNewEvent, updateProductService, deleteProductService } from "../services/eventService";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { successResponse } from "../models/responseModel";
import { EventCreateRequest } from "../models/eventCreateRequestModel";
import { EventDTO } from "../models/eventDTO";


export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await getAllEventsService();

        res.status(HTTP_STATUS.OK).json(successResponse(events, "Events Retrieved"));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error"});
    }
}

export const getEventById = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let results = await getEventByIdService(id);

        res.status(HTTP_STATUS.OK).json(successResponse(results, "Event retrieved"));
    } catch (error) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Internal Server Error"});
    }
}

export const createEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await createNewEvent(req.body as EventCreateRequest);

        res.status(HTTP_STATUS.CREATED).json(
            successResponse(result, "Event created")
        );
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Failed to create event" });
    }
};

export const updateEvent = (req: Request, res: Response) => {
    let result = updateProductService(12, "test")
    res.status(200).json(result);
};
export const deleteEvent = (req: Request, res: Response) => {
    let result = deleteProductService(65)
    res.status(200).json(result);
};