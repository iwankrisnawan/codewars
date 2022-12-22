function sortArray(array) {
  let odd = [];
  let result = [];
  let i = 0;

  array.forEach((data) => {
    if (data % 2 == 1 || data % 2 == -1) {
      odd.push(data);
    }
  });

  odd = odd.sort((a, b) => {
    return a - b;
  });
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 1 || array[index] % 2 == -1) {
      result.push(odd[i]);
      i++;
    } else {
      result.push(array[index]);
    }
  }

  return result;
}
