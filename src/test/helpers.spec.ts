import * as helpers from "../radar/helpers";

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
});

const data1 = [
  {
    enemies: {
      number: 10,
      type: "soldier",
    },
    coordinates: {
      y: 35,
      x: 5,
    },
  },
  {
    enemies: {
      number: 20,
      type: "soldier",
    },
    coordinates: {
      y: 30,
      x: 10,
    },
  },
];
const data1Result = [
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 30, x: 10 },
  },
  {
    enemies: { number: 10, type: "soldier" },
    coordinates: { y: 35, x: 5 },
  },
];
