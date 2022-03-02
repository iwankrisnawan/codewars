function getCount(str) {
  var vowelsCount = 0;
  let length = str.length;
  let arrayCount = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < length; i++) {
    arrayCount.forEach((element) => {
      if (str[i] == element) {
        vowelsCount++;
      }
    });
  }

  return vowelsCount;
}
