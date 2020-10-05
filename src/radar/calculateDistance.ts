export const CalculateDistance = (x: number, y: number): number => {
  const xs = x * x;
  const ys = y * y;
  return Math.sqrt(xs + ys);
};

// To be honest I didn’t remember how to calculate this coordinate shit, I just went to stack overflow and found a formula, seems to work though,
// but if there is a different method I am eager to know about it
