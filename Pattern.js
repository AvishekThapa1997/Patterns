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
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        process.stdout.write(" ");
        continue;
      }
      process.stdout.write("* ");
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

const createPattern6 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        process.stdout.write(" ");
        continue;
      }
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const createPattern7 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        process.stdout.write("* ");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

const createPattern8 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= n - i - 1 && j <= i + (n - 1)) {
        process.stdout.write("*");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

const createPattern9 = (n) => {
  const length = 2 * n - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < length; j++) {
      if (j >= i && j < length - i) {
        process.stdout.write("*");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

const createPattern10 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        process.stdout.write(" ");
        continue;
      }
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
};

const createPattern11 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        process.stdout.write("* ");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

const createPattern12 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    const flag = i < n ? i : 2 * n - i - 1;
    for (let j = 0; j < n; j++) {
      if (j >= flag && j < n) {
        process.stdout.write("* ");
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

const createPattern13 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i === n - 1) {
        process.stdout.write("*");
      } else if (j === n - (i + 1) || j === i + (n - 1)) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};

createPattern1(10);
createPattern2(10);
createPattern3(8);
createPattern4(10);
createPattern5(5);
createPattern6(4);
createPattern7(10);
createPattern8(11);
createPattern9(6);
createPattern10(8);
createPattern11(15);
createPattern12(5);
createPattern13(20);
