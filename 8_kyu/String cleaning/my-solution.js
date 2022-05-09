function stringClean(s) {
  let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let result = "";
  for (let i = 0; i <= s.length - 1; i++) {
    if (arr.includes(s[i])) {
      result = result;
    } else {
      result = result + s[i];
    }
  }
  return result;
}
