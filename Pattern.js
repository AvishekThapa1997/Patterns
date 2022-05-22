const createPattern21 = (n) => {
  let value = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j > 0) {
        process.stdout.write(" ");
      }
      process.stdout.write(`${value++}`);
    }
    process.stdout.write("\n");
  }
};

createPattern21(5);
