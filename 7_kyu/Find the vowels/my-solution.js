function vowelIndices(word) {
  let vowel = ["a", "i", "u", "e", "o", "y", "A", "I", "U", "E", "O", "Y"];
  let result = [];
  for (let index = 0; index <= word.length - 1; index++) {
    if (vowel.includes(word[index])) {
      result.push(index + 1);
    }
  }
  return result;
}
