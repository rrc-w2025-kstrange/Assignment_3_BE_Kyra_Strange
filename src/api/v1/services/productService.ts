import { Product } from "../models/productModel";
import * as firestoreRepository from "../repositories/firestoreRepository";
import { validateRequest } from "../middleware/validateRequest";

const COLLECTION = "products";

export const getHealthCheckService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};

export const getAllProductsService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};

export const getProductByIdService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};

export const createProduct = async (productData: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> => {
  const newProduct = await firestoreRepository.createDocument<Product>(COLLECTION, productData);
  return newProduct;
};

export const updateProductService = (id: number, item: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteProductService = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};