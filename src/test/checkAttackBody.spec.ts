import { CheckProtocols } from "../radar/checkAttackBody";
import { protocolValues, validValues, protocolValuesError } from "./mockData";

describe("checkAttackBody test", () => {
  describe("checkProtocols test", () => {
    it("should be defined", () => {
      expect(CheckProtocols).toBeDefined();
    });

    it("should return true", () => {
      const result = CheckProtocols(protocolValues, validValues);

      expect(result).toBeTruthy();
    });

    it("should return false bad protocol", () => {
      const result = CheckProtocols(protocolValuesError, validValues);

      expect(result).toBeFalsy();
    });
  });
});
