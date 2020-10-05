import { Handler, Response, Request, NextFunction } from "express";
import { Attack } from "../radar";
import { CheckProtocols, CheckScan } from "../radar/checkAttackBody";
import HttpException from "../exceptions/HttpException";
import { ProtocolsEnum } from "../radar";

export const Radar: Handler = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { protocols, scan } = request.body;
    let result: any = {};

    const validProtocols: string[] = Object.values(ProtocolsEnum);

    // This is just a little check to make sure that the body has what we expect, to some extent,
    // obviously with more time I could have used a validator library as Joi or express-validators…….

    const checkRequestBody =
      protocols &&
      protocols.length > 0 &&
      CheckProtocols(protocols, validProtocols) &&
      scan &&
      scan.length > 0 &&
      CheckScan(scan);

    if (checkRequestBody) {
      result = await Attack({ protocols, scan });
    } else {
      throw "Invalid body dude";
    }

    return response.send(result);
  } catch (error) {
    next(new HttpException(400, error));
    return;
  }
};
