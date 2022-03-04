function battle(x, y) {
  let small = "abcdefghijklmnopqrstuvwxyz";
  let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result1 = 0;
  let result2 = 0;

  for (let j = 0; j <= x.length - 1; j++) {
    for (let i = 0; i <= 26; i++) {
      if (x[j] == small[i]) {
        result1 = result1 + (i + 1) * 0.5;
      } else if (x[j] == big[i]) {
        result1 = result1 + (i + 1) * 1;
      }
    }
  }

  for (let j = 0; j <= y.length - 1; j++) {
    for (let i = 0; i <= 26; i++) {
      if (y[j] == small[i]) {
        result2 = result2 + (i + 1) * 0.5;
      } else if (y[j] == big[i]) {
        result2 = result2 + (i + 1) * 1;
      }
    }
  }

  if (result1 > result2) {
    return x;
  } else if (result1 < result2) {
    return y;
  } else {
    return "Tie!";
  }
}
