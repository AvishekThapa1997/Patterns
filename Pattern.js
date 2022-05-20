const createPattern14 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i === 0) {
        process.stdout.write("*");
      } else if (j === i || j === 2 * n - i - 2) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};
createPattern14(6);
