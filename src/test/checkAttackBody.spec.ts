// import { CheckProtocols, CheckScan } from "../utils/checkAttackBody";

import { CheckProtocols } from "../utils/checkAttackBody";
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

// console.log(values);
// [ 'avoid-mech' ]
// console.log(validValues);
// [
//   'closest-enemies',
//   'furthest-enemies',
//   'assist-allies',
//   'avoid-crossfire',
//   'prioritize-mech',
//   'avoid-mech'
// ]

// [ 'closest-enemies', 'prioritize-mech', 'avoid-crossfire' ]
// [
//   'closest-enemies',
//   'furthest-enemies',
//   'assist-allies',
//   'avoid-crossfire',
//   'prioritize-mech',
//   'avoid-mech'
// ]
