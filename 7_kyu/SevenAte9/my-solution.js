function sevenAte9(str) {
  let result = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == "9") {
      if (str[i + 1] == "7" && str[i - 1] == "7") {
        continue;
      } else {
        result = result + str[i];
      }
    } else {
      result = result + str[i];
    }
  }
  return result;
}
