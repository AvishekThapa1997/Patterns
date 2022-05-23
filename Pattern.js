const createPattern28 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const min = i < n ? n - i - 1 : i - n + 1;
    const max = i < n ? i + n - 1 : 2 * n - 2 - (i - n + 1);
    let flag = false;
    let count = i < n ? i + 1 : n - min;
    for (let j = 0; j < n; j++) {
      if (j >= min && j <= max) {
        if (j > min) {
          process.stdout.write(" ");
        }
        process.stdout.write("*");
        if (count === 1) {
          flag = true;
        }
        flag ? ++count : --count;
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

createPattern28(5);
