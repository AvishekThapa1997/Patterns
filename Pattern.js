const createPattern26 = (n) => {
  for (let i = 0; i < n; i++) {
    const value = i + 1;
    for (let j = 0; j < n - i; j++) {
      if (j > 0) {
        process.stdout.write(" ");
      }
      process.stdout.write(value.toString());
    }
    process.stdout.write("\n");
  }
};

createPattern26(5);
