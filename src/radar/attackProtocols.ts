import { Scan, EnemiesEnum, ProtocolsEnum } from "./types";
import { CalculateDistance } from "../utils/calculateDistance";

// Function to sort the closest enemies based on the distance. If distance is bigger than 100 then ignore
export const closest_enemies = (scan: Scan[]) => {
  let result: { distance?: number; scan?: Scan }[] = [];

  scan.forEach((scan: Scan) => {
    const distance = CalculateDistance(scan.coordinates.x, scan.coordinates.y);
    if (distance <= 100) {
      result = [...result, { distance, scan }];
    }
  });

  return result
    .sort((a: any, b: any) => a.distance - b.distance)
    .map((value) => value.scan) as Scan[];
};

// This function sorts the enemies by furthest first, but if distance is more than 100 then ignore
export const furthest_enemies = (scan: Scan[]) => {
  let result: { distance?: number; scan?: Scan }[] = [];

  scan.forEach((scan: Scan) => {
    const distance = CalculateDistance(scan.coordinates.x, scan.coordinates.y);
    if (distance <= 100) {
      result = [...result, { distance, scan }];
    }
  });

  return result
    .sort((a: any, b: any) => b.distance - a.distance)
    .map((value) => value.scan) as Scan[];
};

// Avoid attacking our mech friends, so we just get rid of them if they exists.
// Otherwise, if there are none just return the original data
export const avoid_mech = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.forEach((scan: Scan) => {
    if (scan.enemies.type !== EnemiesEnum.MECH) {
      result = [...result, scan];
    }
  });

  if (result.length > 0) {
    return result;
  } else {
    return scan;
  }
};

// Check to see if there are any elements with allies in them, if so,
// put them first so we get rid of their enemies first
export const assist_allies = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.forEach((scan: Scan) => {
    if (scan.allies) {
      result = [...result, scan];
    }
  });

  if (result.length > 0) {
    return result;
  } else {
    return scan;
  }
};

// making sure there are none allies nearby
export const avoid_crossfire = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.forEach((scan: Scan) => {
    if (!scan.allies) {
      result = [...result, scan];
    }
  });

  if (result.length > 0) {
    return result;
  } else {
    return scan;
  }
};

// Putting mech enemies first, if there are none then attack the first bitch you find
export const prioritize_mech = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.forEach((scan: Scan) => {
    if (scan.enemies.type === EnemiesEnum.MECH) {
      result = [...result, scan];
    }
  });

  if (result.length > 0) {
    return result;
  } else {
    return scan;
  }
};

export const Protocols = new Map()
  .set(ProtocolsEnum.CLOSEST_ENEMIES, closest_enemies)
  .set(ProtocolsEnum.FURTHEST_ENEMIES, furthest_enemies)
  .set(ProtocolsEnum.AVOID_MECH, avoid_mech)
  .set(ProtocolsEnum.PRIORITIZE_MECH, prioritize_mech)
  .set(ProtocolsEnum.ASSIST_ALLIES, assist_allies)
  .set(ProtocolsEnum.AVOID_CROSSFIRE, avoid_crossfire);
