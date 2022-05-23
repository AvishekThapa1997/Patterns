const createPattern27 = (n) => {
  let firstValue = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let k = i; k < n; k++) {
      process.stdout.write(`${(firstValue++).toString()}*`);
    }
    let secondValue = firstValue + (n - i) * (n - i - 1);
    for (let l = 0; l < n - i; l++) {
      process.stdout.write(`${(secondValue++).toString()}`);
      if (l !== n - i - 1) {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
};

createPattern27(5);
