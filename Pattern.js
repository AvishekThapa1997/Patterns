const createPattern12 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    const flag = i < n ? i : 2 * n - i - 1;
    for (let j = 0; j < n; j++) {
      if (j >= flag && j < n) {
        process.stdout.write("* ");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

createPattern12(5);
