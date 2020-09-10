import { Scan, ProtocolsEnum } from "../handlers/radar";
import { CalculateDistance } from "../utils/calculateDistance";

interface Data {
  protocols: string[];
  scan: Scan[];
}
export const Attack = async (data: Data): Promise<any> => {
  console.log("@@@@@data", data);
  // let attackValue: { distance: number; scan: Scan } = {
  //   distance: 0,
  //   scan: { coordinates: { x: 0, y: 0 }, enemies: { type: "", number: 0 } },
  // };

  data.protocols.forEach(async (value) => {
    switch (value) {
      case ProtocolsEnum.CLOSEST_ENEMIES:
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!CLOSEST_ENEMIES");
        data.scan = closest_enemies(data.scan);

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
        break;

      default:
        break;
    }
  });

  return data.scan[0].coordinates;
};

const closest_enemies = (scan: Scan[]) => {
  let result: Scan[] = [];
  let prevDistance = CalculateDistance(
    scan[0].coordinates.x,
    scan[0].coordinates.y,
  );

  console.log("!!!!!!!!closest_enemies.beforeMap.scan", scan);

  scan.map((scan: Scan) => {
    const distance = CalculateDistance(scan.coordinates.x, scan.coordinates.y);
    console.log("Inside closest_enemies", distance);
    if (distance < prevDistance && distance <= 100) {
      result = [scan, ...result];
    } else {
      result = [...result, scan];
    }
    prevDistance = distance;
  });

  console.log("!!!!!!!!closest_enemies.beforeleave", result);

  return result;
};
