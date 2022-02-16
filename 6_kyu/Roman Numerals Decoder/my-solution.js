function solution(roman) {
  var totalString = roman.length;
  var totalRomam = 0;

  for (let i = 0; i < roman.length; i++) {
    if (roman[i] == "C" && roman[i + 1] == "M") {
      totalRomam += 900;
      i++;
    } else if (roman[i] == "C" && roman[i + 1] == "D") {
      totalRomam += 400;
      i++;
    } else if (roman[i] == "X" && roman[i + 1] == "C") {
      totalRomam += 90;
      i++;
    } else if (roman[i] == "X" && roman[i + 1] == "L") {
      totalRomam += 40;
      i++;
    } else if (roman[i] == "I" && roman[i + 1] == "X") {
      totalRomam += 9;
      i++;
    } else if (roman[i] == "I" && roman[i + 1] == "V") {
      totalRomam += 4;
      i++;
    } else if (roman[i] == "I") {
      totalRomam += 1;
    } else if (roman[i] == "V") {
      totalRomam += 5;
    } else if (roman[i] == "X") {
      totalRomam += 10;
    } else if (roman[i] == "L") {
      totalRomam += 50;
    } else if (roman[i] == "C") {
      totalRomam += 100;
    } else if (roman[i] == "D") {
      totalRomam += 500;
    } else if (roman[i] == "M") {
      totalRomam += 1000;
    }
  }

  return totalRomam;
}
