import { db } from "../../../config/firebaseConfig";
import { DocumentReference } from "firebase-admin/firestore";
import { Event } from "../models/eventModel";

export const addEvent = async (): Promise<void> => {
    // Create a reference to a document in the 'users' collection with ID 'user1'
    // If the document doesn't exist, it will be created
    const docRef: DocumentReference = db.collection("Events").doc();

    // Use the `set` method to add or overwrite data in the document
    // The data is passed as an object with fields and their values
    await docRef.set({
        id: "evt_000005",
        name: "Tech Conference 2025",
        createdAt: new Date(),
        });
    console.log("Event added");
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