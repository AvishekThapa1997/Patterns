const createPattern30 = (n) => {
  let value;
  for (let i = 0; i < 2 * n - 1; i++) {
    const min = i < n ? i : 2 * n - i - 2;
    const max = i < n ? 2 * n - (i + 2) : i;
    value = n;
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= min && j <= max) {
        process.stdout.write(value.toString());
        continue;
      }
      if (j < min) {
        process.stdout.write((value--).toString());
        continue;
      }
      if (j > max) {
        process.stdout.write((++value).toString());
      }
    }
    process.stdout.write("\n");
  }
};

createPattern30(5);
