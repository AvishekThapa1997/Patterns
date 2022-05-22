const createPattern20 = (n) => {
  for (let i = 0; i < n; i++) {
    const flag = i > 0 && i < n - 1;
    for (let j = 0; j < n - 1; j++) {
      if (flag && j > 0 && j < n - 2) {
        process.stdout.write(" ");
        continue;
      }
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

createPattern20(5);
