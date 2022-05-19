const createPattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
      if (j < i) {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};
createPattern4(10);
