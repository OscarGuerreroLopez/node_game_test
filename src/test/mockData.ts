export const data1 = [
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
export const data1Result = [
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 30, x: 10 },
  },
  {
    enemies: { number: 10, type: "soldier" },
    coordinates: { y: 35, x: 5 },
  },
];

export const data2 = [
  { enemies: { number: 10, type: "soldier" }, coordinates: { y: 35, x: 5 } },
  { enemies: { number: 20, type: "soldier" }, coordinates: { y: 30, x: 10 } },
];

export const data2Result = [
  {
    enemies: { number: 10, type: "soldier" },
    coordinates: { y: 35, x: 5 },
  },
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 30, x: 10 },
  },
];

export const data3 = [
  {
    enemies: {
      number: 10,
      type: "soldier",
    },
    allies: 3,
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
      y: 5,
      x: 35,
    },
  },
];

export const data3Result = [
  {
    enemies: { number: 10, type: "soldier" },
    allies: 3,
    coordinates: { y: 35, x: 5 },
  },
];

export const data4 = [
  {
    enemies: { number: 10, type: "soldier" },
    allies: 3,
    coordinates: { y: 35, x: 5 },
  },
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 5, x: 35 },
  },
];

export const data4Result = [
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 5, x: 35 },
  },
];

export const data5 = [
  {
    coordinates: { x: 0, y: 40 },
    enemies: { type: "soldier", number: 10 },
  },
  {
    coordinates: { x: 0, y: 80 },
    allies: 5,
    enemies: { type: "mech", number: 1 },
  },
];

export const data5Result = [
  {
    coordinates: { x: 0, y: 80 },
    allies: 5,
    enemies: { type: "mech", number: 1 },
  },
];

export const data6 = [
  {
    coordinates: { x: 0, y: 40 },
    enemies: { type: "soldier", number: 10 },
  },
  {
    coordinates: { x: 0, y: 80 },
    allies: 5,
    enemies: { type: "mech", number: 1 },
  },
];

export const data6Result = [
  {
    coordinates: { x: 0, y: 40 },
    enemies: { type: "soldier", number: 10 },
  },
];
