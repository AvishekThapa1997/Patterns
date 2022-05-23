const createPattern24 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    for (let j = 0; j < 2 * n; j++) {
      if (j === 0 || j === 2 * n - 1) {
        process.stdout.write("*");
        continue;
      }
      if (j === i || j === 2 * n - 1 - i) {
        process.stdout.write("*");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

createPattern24(5);
