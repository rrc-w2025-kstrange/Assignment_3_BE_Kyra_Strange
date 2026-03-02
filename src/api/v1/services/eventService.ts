import { Event } from "../models/eventModel";
import { addEvent, getEventById, getAllEvents, updateEvent, deleteEvent } from "../repositories/firestoreRepository";
import { validateRequest } from "../middleware/validate";
import { EventCreateRequest } from "../models/eventCreateRequestModel";
import { EventDTO } from "../models/eventDTO";

export const getAllEventsService = async (): Promise<Array<EventDTO> | undefined> => {
    // Logic to process all items from the database
    return await getAllEvents();
};

export const getEventByIdService = async (id: string): Promise<Event> => {
    // Logic to process all items from the database
    let entity = await getEventById(id)
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

export const createNewEvent = async (event: EventCreateRequest): Promise<Event> => {
    return await addEvent(event);  
};

export const updateEventById = async (id: string, event: EventCreateRequest): Promise<void> => {
    // Logic to update an item in the database
    await updateEvent(id, event);
    return;
};

export const deleteEventById = async (id: string): Promise<void> => {
    // Logic to delete an item from the database
    await deleteEvent(id);
};