const createPattern25 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i === 0 && j >= n - 1) {
        process.stdout.write("*");
        continue;
      }
      if (i === n - 1 && j < n) {
        process.stdout.write("*");
        continue;
      }
      if (i > 0 && i < n - 1) {
        if (j === n - (i + 1) || j === 2 * n - 1 - (i + 1)) {
          process.stdout.write("*");
          continue;
        }
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

createPattern25(5);
