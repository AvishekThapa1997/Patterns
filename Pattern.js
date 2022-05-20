const createPattern5 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const index = i < n ? i : 2 * n - i - 2;
    for (let j = 0; j <= index; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

createPattern5(5);
