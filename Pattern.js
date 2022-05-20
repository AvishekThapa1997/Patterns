const createPattern13 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i === n - 1) {
        process.stdout.write("*");
      } else if (j === n - (i + 1) || j === i + (n - 1)) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};
createPattern13(20);
