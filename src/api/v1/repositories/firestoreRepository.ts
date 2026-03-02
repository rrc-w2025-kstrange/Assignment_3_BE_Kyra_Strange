import { db } from "../../../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
import { Event } from "../models/eventModel";
import { EventDTO } from "../models/eventDTO";
import { EventCreateRequest } from "../models/eventCreateRequestModel";


export const addEvent = async (event: EventCreateRequest): Promise<Event> => {
    const counterRef = db.collection("metadata").doc("eventCounter");
    const eventsCollection = db.collection("Events");
    
    return await db.runTransaction(async (transaction) => {
        const counterDoc = await transaction.get(counterRef);
        const currentCount = counterDoc.exists ? counterDoc.data()?.count : 0;
        const nextCount = currentCount + 1;
        const customId = `evt_${nextCount.toString().padStart(6, '0')}`;
        const docRef = eventsCollection.doc(customId);

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
        };

        transaction.set(docRef, eventEntity);
        transaction.set(counterRef, { count: nextCount });

        return eventEntity;
    });
};


export const getEventById = async (id: string): Promise<Event | undefined> => {
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

export const getAllEvents = async (): Promise<Array<EventDTO> | undefined> => {
    const snapshot: QuerySnapshot = await db.collection("Events").orderBy("createdAt", "asc").get();
    
    const events: EventDTO[] = []

    snapshot.forEach((doc) => {
        let data = doc.data();
        events.push({
          id: doc.id,
          name: data!.name,
          date: data!.date.toDate().toISOString(), 
          capacity: data!.capacity,
          registrationCount: data!.registrationCount,
          status: data!.status,
          category: data!.category,
          createdAt: data!.createdAt.toDate().toISOString(),
          updatedAt: data!.updatedAt.toDate().toISOString(),
        })
    });

    return events;
};

export const updateEvent = async (id: string, event: EventCreateRequest): Promise<void> => {
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


export const deleteEvent = async (id: string): Promise<void> => {
    // Create a reference to a specific document in the 'users' collection
    const docRef: DocumentReference = db.collection("Events").doc(id);

    // Use the `delete()` method to remove the document from Firestore
    await docRef.delete();
};