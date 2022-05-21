const createPattern15 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i < n) {
        const base = n - 1;
        if (j === base - i || j === i + base) {
          process.stdout.write("*");
          continue;
        }
      } else {
        const base = i - n + 1;
        if (j === base || j === 2 * n - 2 - base) {
          process.stdout.write("*");
          continue;
        }
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

createPattern15(11);
