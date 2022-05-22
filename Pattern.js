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

const createPattern14 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i === 0) {
        process.stdout.write("*");
      } else if (j === i || j === 2 * n - i - 2) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
};

const createPattern15 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i < n) {
        const base = n - 1;
        if (j === base - i || j === i + base) {
          process.stdout.write("*");
          continue;
        }
      } else {
        const base = i - n + 1;
        if (j === base || j === 2 * n - 2 - base) {
          process.stdout.write("*");
          continue;
        }
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

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

const createPattern17 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const min = i < n ? n - i - 1 : i - n + 1;
    const max = i < n ? i + n - 1 : 2 * n - 2 - (i - n + 1);
    let flag = false;
    let count = i < n ? i + 1 : n - min;
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= min && j <= max) {
        process.stdout.write(count.toString());
        if (count === 1) {
          flag = true;
        }
        flag ? ++count : --count;
        continue;
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

const createPattern18 = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    const min = i < n ? n - i : i - n + 1;
    const max = i < n ? n + i - 1 : 2 * n - 1 - (i - n + 1);
    for (let j = 0; j < 2 * n; j++) {
      if (i > 0 && i < 2 * n - 1) {
        if (j >= min && j <= max) {
          process.stdout.write(" ");
          continue;
        }
      }
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const createPattern19 = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    const min = i < n ? i + 1 : 2 * n - i - 1;
    const max = i < n ? 2 * n - (i + 2) : i;
    for (let j = 0; j < 2 * n; j++) {
      if (j >= min && j <= max) {
        process.stdout.write(" ");
        continue;
      }
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
createPattern6(4);
createPattern7(10);
createPattern8(11);
createPattern9(6);
createPattern10(8);
createPattern11(15);
createPattern12(5);
createPattern13(20);
createPattern14(6);
createPattern15(11);
createPattern16(5);
createPattern17(5);
createPattern18(5);
createPattern19(5);
