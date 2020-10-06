import { Data } from "./types";
import * as helpers from "./attackProtocols";

export const Attack = async (data: Data): Promise<AttackResponse> => {
  try {
    data.protocols.forEach(async (value) => {
      const protocolToExecute = helpers.Protocols.get(value);

      const result = protocolToExecute(data.scan);
      data.scan = result;
    });

    // making sure I return the response in the format that the test is expecting, x first:
    const response: AttackResponse = {
      x: data.scan[0].coordinates.x.toString(),
      y: data.scan[0].coordinates.y.toString(),
    };

    return response;
  } catch (error) {
    throw error.message || error;
  }
};
