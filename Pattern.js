const createPattern32 = (n) => {
  let showInLowerCase = true;
  let charCode = 65;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j > 0) {
        process.stdout.write(" ");
      }
      const value = String.fromCharCode(charCode++);
      if (showInLowerCase) {
        process.stdout.write(value.toLowerCase());
      } else {
        process.stdout.write(value);
      }
      showInLowerCase = !showInLowerCase;
    }
    process.stdout.write("\n");
    //showInLowerCase = !showInLowerCase;
  }
};

createPattern32(5);
