import { db } from "../../../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
import { Event } from "../models/eventModel";
import { EventDTO } from "../models/eventDTO";
import { EventCreateRequest } from "../models/eventCreateRequestModel";


export const addEvent = async (event: EventCreateRequest): Promise<Event> => {
    const customId = `evt_${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    
    const docRef: DocumentReference = db.collection("Events").doc(customId);

    const eventEntity: Event = {
        id: customId,
        name: event.name,
        date: event.date, 
        capacity: event.capacity,
        registrationCount: event.registrationCount || 0, 
        status: event.status || "active",
        category: event.category || "general", 
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    await docRef.set(eventEntity);

    return eventEntity;
};


export const getDocumentById = async (id: string): Promise<Event | undefined> => {
    // Create a reference to a specific document in the 'users' collection
    const docRef: DocumentReference = db.collection("Events").doc(id);

    // Use the `get()` method to retrieve the document
    const doc = await docRef.get();

    // Check if the document exists
    if (doc.exists) {
        // `doc.data()` returns an object with all fields in the document
        let data = doc.data();

        return {
          id: doc.id,
          name: data!.name,
          date: data!.date,
          capacity: data!.capacity,
          registrationCount: data!.registrationCount,
          status: data!.status,
          category: data!.category,
          createdAt: data!.createdAt,
          updatedAt: data!.updatedAt,
        }
      } else {
        console.log("No such document!");
    }
};

export const getCollection = async (): Promise<Array<EventDTO> | undefined> => {
    // Retrieve all documents from the 'users' collection
    // `get()` returns a QuerySnapshot containing all documents in the collection
    const snapshot: QuerySnapshot = await db.collection("Events").get();

    const events: EventDTO[] = []

    // Iterate through each document in the collection
    snapshot.forEach((doc) => {

        let data = doc.data();
        events.push({
          id: doc.id,
          name: data!.name,
          date: data!.date, 
          capacity: data!.capacity,
          registrationCount: data!.registrationCount,
          status: data!.status,
          category: data!.category,
          createdAt: data!.createdAt,
          updatedAt: data!.updatedAt,
        })
    });

    return events;
};

export const updateDocument = async (id: string, event: EventCreateRequest): Promise<void> => {
    // Create a reference to a specific document in the 'users' collection
    const docRef: DocumentReference = db.collection("Events").doc(id);

    // Use the `update()` method to modify specific fields in the document
    // This will only change the specified fields, leaving others untouched
    await docRef.update({
        name: event.name,
        date: event.date, 
        capacity: event.capacity,
        updatedAt: new Date(),
    });
    return;
};