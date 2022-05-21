const createPattern16 = (n) => {
  let items = [1, 1];
  for (let i = 0; i < n; i++) {
    const base = n - i - 1;
    let index = 0;
    const result = [];
    for (let j = 0; j < n; j++) {
      if (j >= base) {
        if (j === base || j === n - 1) {
          process.stdout.write(" 1");
          continue;
        }
        const value = items[index] + items[index + 1];
        process.stdout.write(` ${value}`);
        result[index++] = value;
        continue;
      }
      process.stdout.write(" ");
    }
    items = [1, ...result, 1];
    process.stdout.write("\n");
  }
};
createPattern16(5);
