import Joi, { ObjectSchema } from "joi";

// Events operation schemas organized by request part
export const eventSchemas = {
    // POST /event - Create new event
    create: {
        body: Joi.object({
            name: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
            date: Joi.string().required().messages({
                "any.required": "Content is required",
                "string.empty": "Content cannot be empty",
            }),
            capacity: Joi.string().required().messages({
                "any.required": "Content is required",
                "string.empty": "Content cannot be empty",
            }),
        }),
    },

    // GET /event/:id - Get single event
    getById: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
    },

    // PUT /event/:id - Update event
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
        body: Joi.object({
            content: Joi.string().optional().messages({
                "string.empty": "Content cannot be empty",
            }),
        }),
    },

    // DELETE /event/:id - Delete event
    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
    },

    // GET /event - List events with filtering
    list: {
        query: Joi.object({
            page: Joi.number().integer().min(1).default(1),
            limit: Joi.number().integer().min(1).max(100).default(10),
            userId: Joi.string().optional(),
            sortBy: Joi.string()
                .valid("createdAt", "updatedAt")
                .default("createdAt"),
            sortOrder: Joi.string().valid("asc", "desc").default("desc"),
        }),
    },
};