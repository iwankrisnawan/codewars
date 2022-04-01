function maps(x) {
  let result = [];
  x.map((data) => {
    result.push(data + data);
  });
  return result;
}
