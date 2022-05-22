const createPattern18 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    const min = i < n ? n - i : i - n + 1;
    const max = i < n ? n + i - 1 : 2 * n - 1 - (i - n + 1);
    for (let j = 0; j < 2 * n; j++) {
      if (i > 0 && i < 2 * n - 1) {
        if (j >= min && j <= max) {
          process.stdout.write(" ");
          continue;
        }
      }
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};
createPattern18(5);
