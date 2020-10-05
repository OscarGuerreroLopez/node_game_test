import { Scan } from ".";

export const CheckProtocols = (
  values: string[],
  validValues: string[],
): boolean => {
  let validation = true;

  values.forEach((value: string) => {
    if (!validValues.includes(value)) {
      validation = false;
    }
  });

  return validation;
};

export const CheckScan = (scan: Scan[]): boolean => {
  let validation = true;

  scan.forEach((value: Scan) => {
    if (
      !value.hasOwnProperty("coordinates") ||
      !value.hasOwnProperty("enemies")
    ) {
      validation = false;
    }
  });

  return validation;
};
