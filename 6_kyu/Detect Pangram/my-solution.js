function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let total = 0;
  for (let index = 0; index < alphabet.length; index++) {
    for (let l = 0; l < string.length; l++) {
      if (
        alphabet[index] == string[l] ||
        alphabet[index].toUpperCase() == string[l].toUpperCase()
      ) {
        total = total + 1;
        break;
      }
    }
  }
  return total == 26 ? true : false;
}
