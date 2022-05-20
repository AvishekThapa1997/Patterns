const createPattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const createPattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const createPattern3 = (n) => {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const createPattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
      if (j < i) {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};

const createPattern5 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const index = i < n ? i : 2 * n - i - 2;
    for (let j = 0; j <= index; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

createPattern1(10);
createPattern2(10);
createPattern3(8);
createPattern4(10);
createPattern5(5);
