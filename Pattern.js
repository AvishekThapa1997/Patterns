const createPattern22 = (n) => {
  let item;
  for (let i = 0; i < n; i++) {
    item = i % 2 === 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      if (j > 0) {
        process.stdout.write(" ");
      }
      process.stdout.write(`${item}`);
      item ? --item : ++item;
    }
    process.stdout.write("\n");
  }
};

createPattern22(5);
