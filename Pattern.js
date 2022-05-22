const createPattern17 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const min = i < n ? n - i - 1 : i - n + 1;
    const max = i < n ? i + n - 1 : 2 * n - 2 - (i - n + 1);
    let flag = false;
    let count = i < n ? i + 1 : n - min;
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= min && j <= max) {
        process.stdout.write(count.toString());
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

createPattern17(5);
