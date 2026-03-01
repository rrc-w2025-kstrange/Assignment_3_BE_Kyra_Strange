import { Event } from "../models/eventModel";
import { addEvent, getDocumentById } from "../repositories/firestoreRepository";
import { validateRequest } from "../middleware/validateRequest";

export const getAllEventsService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};

export const getEventByIdService = async (id: string): Promise<Event> => {
    // Logic to process all items from the database
    let entity = await getDocumentById(id)
    return {
        id: entity?.id,
        name: entity?.name,
        date: entity?.date,
        capacity: entity?.capacity,
        registrationCount: entity?.registrationCount,
        status: entity?.status,
        category: entity?.category,
        createdAt: entity?.createdAt,
        updatedAt: entity?.updatedAt,
    }
};

export const createNewEvent = (event: string): string => {
    addEvent();
    return "Event added";
};

export const updateProductService = (id: number, item: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteProductService = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};