import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS  } from "../../../constants/httpConstants";

export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: `Validation error: ${error.message}`,
      });
    }

    next();
  };
};