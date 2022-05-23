const createPattern32 = (n) => {
  let charCode = 65 + (n - 1);
  for (let i = 0; i < n; i++) {
    let temp = charCode - i;
    for (let j = 0; j < n - i; j++) {
      if (j > 0) {
        process.stdout.write(" ");
      }
      process.stdout.write(String.fromCharCode(temp--));
    }
    process.stdout.write("\n");
  }
};
