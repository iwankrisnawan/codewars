function bingo(a) {
  let result = [false, false, false, false, false];
  a.forEach((data) => {
    if (data == 2) {
      result[0] = true;
    }
    if (data == 9) {
      result[1] = true;
    }
    if (data == 14) {
      result[2] = true;
    }
    if (data == 7) {
      result[3] = true;
    }
    if (data == 15) {
      result[4] = true;
    }
  });
  if (result.includes(false)) {
    return "LOSE";
  }
  return "WIN";
}
