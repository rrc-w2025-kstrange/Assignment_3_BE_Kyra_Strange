import { db } from "../../../config/firebaseConfig";
import { DocumentReference } from "firebase-admin/firestore";

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