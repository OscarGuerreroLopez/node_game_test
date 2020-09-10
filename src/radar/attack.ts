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
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!CLOSEST_ENEMIES");
        data.scan = closest_enemies(data.scan);
        console.log(data.scan);

        break;

      case ProtocolsEnum.FURTHEST_ENEMIES:
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!FURTHEST_ENEMIES");
        break;

      case ProtocolsEnum.ASSIST_ALLIES:
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!ASSIST_ALLIES");
        break;

      case ProtocolsEnum.AVOID_CROSSFIRE:
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!AVOID_CROSSFIRE");
        break;

      case ProtocolsEnum.PRIORITIZE_MECH:
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!PRIORITIZE_MECH");
        break;

      case ProtocolsEnum.AVOID_MECH:
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!AVOID_MECH");
        data.scan = avoid_mech(data.scan);
        console.log(data.scan);

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

const avoid_mech = (scan: Scan[]) => {
  let result: Scan[] = [];

  scan.map((scan: Scan) => {
    if (scan.enemies.type !== EnemiesEnum.MECH) {
      result = [...result, scan];
    }
  });

  return result;
};
