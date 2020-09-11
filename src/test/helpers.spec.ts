import * as helpers from "../radar/helpers";
import {
  data1,
  data1Result,
  data2,
  data2Result,
  data3,
  data3Result,
  data4,
  data4Result,
  data5,
  data5Result,
  data6,
  data6Result,
} from "./mockData";

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

  describe("checking assist_allies", () => {
    it("should be defined", () => {
      expect(helpers.assist_allies).toBeDefined();
    });
    it("should return {x: 5, y:35}", () => {
      const result = helpers.assist_allies(data3);
      expect(result).toStrictEqual(data3Result);
    });
  });

  describe("checking avoid_crossfire", () => {
    it("should be defined", () => {
      expect(helpers.avoid_crossfire).toBeDefined();
    });
    it("should return {x: 35, y:5}", () => {
      const result = helpers.avoid_crossfire(data4);
      expect(result).toStrictEqual(data4Result);
    });
  });

  describe("checking prioritize_mech", () => {
    it("should be defined", () => {
      expect(helpers.prioritize_mech).toBeDefined();
    });
    it("should return {x: 0, y:80}", () => {
      const result = helpers.prioritize_mech(data5);
      expect(result).toStrictEqual(data5Result);
    });
  });

  describe("checking avoid_mech", () => {
    it("should be defined", () => {
      expect(helpers.avoid_mech).toBeDefined();
    });
    it("should return {x: 0, y:40}", () => {
      const result = helpers.avoid_mech(data6);
      expect(result).toStrictEqual(data6Result);
    });
  });
});
