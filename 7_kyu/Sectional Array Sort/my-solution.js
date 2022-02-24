function sectSort(array, start, length) {
  let myArray = [];
  length = !length ? array.length : length;

  let myStart = start;
  for (let i = 0; i < length; i++) {
    if (array[myStart] !== undefined) {
      myArray.push(array[myStart]);
      myStart++;
    }
  }

  myArray.sort(function (a, b) {
    return a - b;
  });

  let myStart2 = start;
  for (let m = 0; m <= myArray.length - 1; m++) {
    array[myStart2] = myArray[m];
    myStart2++;
  }

  return array;
}
