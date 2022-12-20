function correct(string) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] == "0") {
      result = result + "O";
    } else if (string[index] == "5") {
      result = result + "S";
    } else if (string[index] == "1") {
      result = result + "I";
    } else {
      result = result + string[index];
    }
  }
  return result;
}
