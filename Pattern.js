const createPattern31 = (n) => {
  for (let i = 0; i < n; i++) {
    let charCode = 65 + (n - 1) - i;
    for (let j = 0; j <= i; j++) {
      if (j > 0) {
        process.stdout.write(" ");
      }
      process.stdout.write(String.fromCharCode(charCode++));
    }
    process.stdout.write("\n");
  }
};

createPattern31(5);
