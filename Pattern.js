const createPattern9 = (n) => {
  const length = 2 * n - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < length; j++) {
      if (j >= i && j < length - i) {
        process.stdout.write("*");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

createPattern9(6);
