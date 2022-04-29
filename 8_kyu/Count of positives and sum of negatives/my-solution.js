function countPositivesSumNegatives(input) {
  let result = [0, 0];

  if (input == null || input.length == 0) {
    return [];
  }

  input.forEach((data) => {
    result[0] = data > 0 ? result[0] + 1 : result[0];
    result[1] = data < 0 ? result[1] + data : result[1];
  });
  return result;
}
