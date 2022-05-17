function reverseWords(str) {
  let result = "";
  let data = str.split(" ");

  for (let i = data.length - 1; i >= 0; i--) {
    result = result + data[i];
    if (i != 0) {
      result = result + " ";
    }
  }
  return result;
}
