function sumOfMinimums(arr) {
  let result = 0;
  arr.map((data) => {
    result = result + Math.min(...data);
  });
  return result;
}
