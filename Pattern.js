const createPattern6 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        process.stdout.write(" ");
        continue;
      }
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};
createPattern6(4);
