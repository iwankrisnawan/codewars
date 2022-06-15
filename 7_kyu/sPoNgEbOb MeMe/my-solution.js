function spongeMeme(sentence) {
  let result = "";
  for (let index = 0; index <= sentence.length - 1; index++) {
    if (index % 2 == 0) {
      result += sentence[index].toUpperCase();
    } else {
      result += sentence[index].toLowerCase();
    }
  }
  return result;
}
