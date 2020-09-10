import { Protocols, Scan } from "../handlers/radar";

interface Data {
  protocols: Protocols[];
  scan: Scan[];
  allies?: number;
}
export const Attack = async (data: Data): Promise<any> => {
  return data;
};
