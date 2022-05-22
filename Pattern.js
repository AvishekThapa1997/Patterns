const createPattern19 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const min = i < n ? i + 1 : 2 * n - i - 1;
    const max = i < n ? 2 * n - (i + 2) : i;
    for (let j = 0; j < 2 * n; j++) {
      if (j >= min && j <= max) {
        process.stdout.write(" ");
        continue;
      }
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

createPattern19(5);
