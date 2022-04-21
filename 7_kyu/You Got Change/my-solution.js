function giveChange(amount) {
  let cash = amount;
  let result = [0, 0, 0, 0, 0, 0];
  while (cash > 0) {
    if (cash - 100 >= 0) {
      result[5] = result[5] + 1;
      cash = cash - 100;
    } else if (cash - 50 >= 0) {
      result[4] = result[4] + 1;
      cash = cash - 50;
    } else if (cash - 20 >= 0) {
      result[3] = result[3] + 1;
      cash = cash - 20;
    } else if (cash - 10 >= 0) {
      result[2] = result[2] + 1;
      cash = cash - 10;
    } else if (cash - 5 >= 0) {
      result[1] = result[1] + 1;
      cash = cash - 5;
    } else if (cash - 1 >= 0) {
      result[0] = result[0] + 1;
      cash = cash - 1;
    }
  }
  return result;
}
