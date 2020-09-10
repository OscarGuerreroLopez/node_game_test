import { Scan, ProtocolsEnum, EnemiesEnum } from "../handlers/radar";
import { CalculateDistance } from "../utils/calculateDistance";

interface Data {
  protocols: string[];
  scan: Scan[];
}
export const Attack = async (data: Data): Promise<any> => {
  data.protocols.forEach(async (value) => {
    switch (value) {
      case ProtocolsEnum.CLOSEST_ENEMIES:
        data.scan = closest_enemies(data.scan);
        console.log("!!!!!!!CLOSEST_ENEMIES", data.scan);
        break;

      case ProtocolsEnum.FURTHEST_ENEMIES:
        data.scan = furthest_enemies(data.scan);
        break;

      case ProtocolsEnum.ASSIST_ALLIES:
        data.scan = assist_allies(data.scan);
        break;

      case ProtocolsEnum.AVOID_CROSSFIRE:
        data.scan = avoid_crossfire(data.scan);
        break;

      case ProtocolsEnum.PRIORITIZE_MECH:
        data.scan = prioritize_mech(data.scan);
        break;

      case ProtocolsEnum.AVOID_MECH:
        data.scan = avoid_mech(data.scan);
        break;

      default:
        break;
    }
  });

  return data.scan[0].coordinates;
};

const closest_enemies = (scan: Scan[]) => {
  let result: { distance?: number; scan?: Scan }[] = [];

  scan.map((scan: Scan) => {
    const distance = CalculateDistance(scan.coordinates.x, scan.coordinates.y);
    if (distance <= 100) {
      result = [...result, { distance, scan }];
    }
  });

  return result
    .sort((a: any, b: any) => a.distance - b.distance)
    .map((value) => value.scan) as Scan[];
};

const furthest_enemies = (scan: Scan[]) => {
  let result: { distance?: number; scan?: Scan }[] = [];

  scan.map((scan: Scan) => {
    const distance = CalculateDistance(scan.coordinates.x, scan.coordinates.y);
    if (distance <= 100) {
      result = [...result, { distance, scan }];
    }
  });

  return result
    .sort((a: any, b: any) => b.distance - a.distance)
    .map((value) => value.scan) as Scan[];
};

const avoid_mech = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.map((scan: Scan) => {
    if (scan.enemies.type !== EnemiesEnum.MECH) {
      result = [...result, scan];
    }
  });

  return result;
};

const assist_allies = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.map((scan: Scan) => {
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

const avoid_crossfire = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.map((scan: Scan) => {
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

const prioritize_mech = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.map((scan: Scan) => {
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
