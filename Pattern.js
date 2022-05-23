const createPattern34 = (n) => {
  const index = 2 * (n - 1);
  for (let i = 0; i < n; i++) {
    let value = 1;
    const max = index - i;
    for (let j = 0; j <= index; j++) {
      if (j === i + 1) {
        value = value - (i === n - 1 ? 2 : 1);
      }
      if (j <= i) {
        process.stdout.write((value++).toString());
      } else if (j >= max && j <= index) {
        process.stdout.write((value--).toString());
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};

createPattern34(5);
