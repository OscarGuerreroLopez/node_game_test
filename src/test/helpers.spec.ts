import * as helpers from "../radar/helpers";
import { data1, data1Result, data2, data2Result } from "./mockData";

describe("radar helpers test", () => {
  describe("checking closest_enemies", () => {
    it("should be defined", () => {
      expect(helpers.closest_enemies).toBeDefined();
    });
    it("should return {x: 10, y:30}", () => {
      const result = helpers.closest_enemies(data1);
      expect(result).toStrictEqual(data1Result);
    });
  });

  describe("checking furthest_enemies", () => {
    it("should be defined", () => {
      expect(helpers.furthest_enemies).toBeDefined();
    });
    it("should return {x: 5, y:35}", () => {
      const result = helpers.furthest_enemies(data2);
      expect(result).toStrictEqual(data2Result);
    });
  });
});
