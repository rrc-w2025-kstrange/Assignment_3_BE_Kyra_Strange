import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { HTTP_STATUS  } from "../../../constants/httpConstants";

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: `Validation error: ${error.message}`,
      });
    }

    next();
  };
};