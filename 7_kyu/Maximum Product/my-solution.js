function adjacentElementsProduct(array) {
  let length = array.length - 1;
  let numberBigger = array[0] * array[1];

  for (let i = 0; i <= length; i++) {
    if (array[i + 1]) {
      if (numberBigger < array[i] * array[i + 1]) {
        numberBigger = array[i] * array[i + 1];
      }
    } else {
      if (numberBigger < array[i] * array[i - 1]) {
        numberBigger = array[i] * array[i - 1];
      }
    }
  }
  return numberBigger;
}
