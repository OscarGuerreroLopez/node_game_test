import { Scan } from "../handlers/radar";

export const CheckProtocols = (
  values: string[],
  validValues: string[],
): boolean => {
  let validation = false;

  values.forEach((value: string) => {
    if (validValues.includes(value)) {
      validation = true;
    }
  });

  return validation;
};

export const CheckScan = (scan: Scan[]): boolean => {
  let validation = false;

  scan.forEach((value: Scan) => {
    if (
      value.hasOwnProperty("coordinates") &&
      value.hasOwnProperty("enemies")
    ) {
      validation = true;
    }
  });

  return validation;
};
