import { Handler, Response, Request, NextFunction } from "express";
import { Attack } from "../radar";
import { CheckProtocols, CheckScan } from "../utils/checkAttackBody";
import HttpException from "../exceptions/HttpException";

export interface Scan {
  coordinates: CoordinateTypes;
  enemies: {
    type: EnemyTypes;
    number: number;
  };
}

export interface Protocols {
  protocols: ProtocolsEnum;
}

export enum ProtocolsEnum {
  CLOSEST_ENEMIES = "closest-enemies",
  FURTHEST_ENEMIES = "furthest-enemies",
  ASSIST_ALLIES = "assist-allies",
  AVOID_CROSSFIRE = "avoid-crossfire",
  PRIORITIZE_MECH = "prioritize-mech",
  AVOID_MECH = "avoid-mech",
}

export enum EnemiesEnum {
  SOLDIER = "soldier",
  MECH = "mech",
}
export type ProtocolsTypes = ProtocolsEnum;

export type EnemyTypes = EnemiesEnum;

export type CoordinateTypes = "x" | "y";

export const Radar: Handler = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { protocols, scan, allies } = request.body;
    let result: any = {};

    const validProtocols: string[] = Object.values(ProtocolsEnum);

    const checkRequestBody =
      protocols &&
      protocols.length > 0 &&
      CheckProtocols(protocols, validProtocols) &&
      scan &&
      scan.length > 0 &&
      CheckScan(scan);

    if (checkRequestBody) {
      result = await Attack({ protocols, scan, allies });
    } else {
      throw "Invalid body dude";
    }

    return response.send(result);
  } catch (error) {
    next(new HttpException(400, error));
    return;
  }
};
