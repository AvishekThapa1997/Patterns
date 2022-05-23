const createPattern29 = (n) => {
  for (let i = 0; i < n; i++) {
    const min = n - i - 1;
    const max = i + n - 1;
    let flag = false;
    let count = i < n ? i + 1 : n - min;
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= min && j <= max) {
        if (j > min) {
          process.stdout.write(" ");
        }
        process.stdout.write(count.toString());
        if (count === 1) {
          flag = true;
        }
        flag ? ++count : --count;
        continue;
      }
      process.stdout.write("  ");
    }
    process.stdout.write("\n");
  }
};
