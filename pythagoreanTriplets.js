function pythagoreanTriplets(n) {
  const result = [];

  for (let a = 1; a <= n - 2; a++) {
    for (let b = a + 1; b <= n - 1; b++) {
      for (let c = b + 1; c <= n; c++) {
        if (a * a + b * b === c * c) {
          result.push([a, b, c]);
        }
      }
    }
  }

  return result;
}
