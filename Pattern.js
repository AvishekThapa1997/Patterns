const createPattern23 = (n) => {
  for (let i = 0; i < n; i++) {
    const value = 2 * (n - 1) + (n - 1 + i);
    for (let j = 0; j <= 4 * (n - 1); j++) {
      if (j === n - 1 - i || j === value) {
        process.stdout.write("*");
      } else if (i > 0 && j === n + i - 1) {
        process.stdout.write("*");
      } else if (i > 0 && j === 4 * (n - 1) - (i + n - 1)) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};

createPattern23(5);
