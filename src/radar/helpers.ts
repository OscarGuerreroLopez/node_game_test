import { Scan, EnemiesEnum } from "../handlers/radar";
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
