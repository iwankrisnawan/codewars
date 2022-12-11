function solution(string) {
  let result = "";
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] == string[i].toUpperCase()) {
      result = result + " ";
    }
    result = result + string[i];
  }
  return result;
}
