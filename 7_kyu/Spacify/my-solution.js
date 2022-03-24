function spacify(str) {
  let result = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (i != str.length - 1) {
      result = result + str[i] + " ";
    } else {
      result = result + str[i];
    }
  }
  return result;
}
