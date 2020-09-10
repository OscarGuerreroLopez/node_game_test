import { Scan, ProtocolsEnum } from "../handlers/radar";
import * as helpers from "./helpers";

interface Data {
  protocols: string[];
  scan: Scan[];
}
export const Attack = async (data: Data): Promise<any> => {
  data.protocols.forEach(async (value) => {
    switch (value) {
      case ProtocolsEnum.CLOSEST_ENEMIES:
        data.scan = helpers.closest_enemies(data.scan);
        break;

      case ProtocolsEnum.FURTHEST_ENEMIES:
        data.scan = helpers.furthest_enemies(data.scan);
        break;

      case ProtocolsEnum.ASSIST_ALLIES:
        data.scan = helpers.assist_allies(data.scan);
        break;

      case ProtocolsEnum.AVOID_CROSSFIRE:
        data.scan = helpers.avoid_crossfire(data.scan);
        break;

      case ProtocolsEnum.PRIORITIZE_MECH:
        data.scan = helpers.prioritize_mech(data.scan);
        break;

      case ProtocolsEnum.AVOID_MECH:
        data.scan = helpers.avoid_mech(data.scan);
        break;

      default:
        break;
    }
  });

  // making sure I return the response in the format that the test is expecting:
  const response = {
    x: data.scan[0].coordinates.x,
    y: data.scan[0].coordinates.y,
  };

  return response;
};
