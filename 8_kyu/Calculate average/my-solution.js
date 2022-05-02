function find_average(array) {
  let result = 0;
  if (array.length > 0) {
    array.forEach((data) => {
      result = result + data;
    });
    return result / array.length;
  }
  return result;
}
