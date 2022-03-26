function filter_list(data) {
  let result = [];
  data.map((d) => {
    if (Number.isInteger(d)) {
      result.push(d);
    }
  });
  return result;
}
