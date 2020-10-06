import { Handler, Response, Request, NextFunction } from "express";
import { Attack } from "../radar";

import HttpException from "../exceptions/HttpException";

export const Radar: Handler = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    let result: AttackResponse = { x: "0", y: "0" };
    const { protocols, scan } = request.body;

    // This is just a little check to make sure that the body has what we expect, to some extent,
    // obviously with more time I could have used a validator library as Joi or express-validators…….

    result = await Attack({ protocols, scan });

    return response.send(result);
  } catch (error) {
    next(new HttpException(400, error));
    return;
  }
};
