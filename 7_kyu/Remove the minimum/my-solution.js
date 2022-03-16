function removeSmallest(numbers) {
  let minNumber = 0;
  numbers.map((data) => {
    if (data >= minNumber && minNumber == 0) {
      minNumber = data;
    } else {
      if (data <= minNumber && minNumber != 0) {
        minNumber = data;
      }
    }
  });

  let result = [];
  let d = false;
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] == minNumber && d == false) {
      d = true;
    } else {
      result.push(numbers[i]);
    }
  }

  return result;
}
