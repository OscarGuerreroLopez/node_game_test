import { Data } from "./types";
import * as helpers from "./helpers";

export const Attack = async (data: Data): Promise<any> => {
  try {
    data.protocols.forEach(async (value) => {
      const protocolToExecute = helpers.Protocols.get(value);

      const result = protocolToExecute(data.scan);
      data.scan = result;
    });

    // making sure I return the response in the format that the test is expecting, x first:
    const response = {
      x: data.scan[0].coordinates.x,
      y: data.scan[0].coordinates.y,
    };

    return response;
  } catch (error) {
    throw error;
  }
};
