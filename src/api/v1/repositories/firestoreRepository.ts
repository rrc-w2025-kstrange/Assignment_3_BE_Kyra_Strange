import { db } from "../../../config/firebaseConfig";

export const createDocument = async <T>(
  collectionName: string,
  data: Partial<T>
): Promise<T & { id: string }> => {
  const docRef = await db.collection(collectionName).add({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const docSnap = await docRef.get();
  return { id: docRef.id, ...(docSnap.data() as T) };
};