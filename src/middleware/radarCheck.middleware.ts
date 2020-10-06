import { Request, Response, NextFunction } from "express";
import { ProtocolsEnum } from "../radar";
import { CheckProtocols, CheckScan } from "../radar/checkAttackBody";
import HttpException from "../exceptions/HttpException";

export const RadarCheckMiddleware = (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  const { protocols, scan } = request.body;

  const validProtocols: string[] = Object.values(ProtocolsEnum);

  const checkRequestBody =
    protocols &&
    protocols.length > 0 &&
    CheckProtocols(protocols, validProtocols) &&
    scan &&
    scan.length > 0 &&
    CheckScan(scan);

  if (checkRequestBody) {
    next();
  } else {
    next(new HttpException(400, "Invalid body sorry"));
  }

  return;
};
