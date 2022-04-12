function highAndLow(numbers) {
  let data = numbers.split(" ");
  let small = data[0];
  let big = data[0];

  data.forEach((data) => {
    data = eval(data);
    if (small >= data) {
      small = data;
    }
    if (big <= eval(data)) {
      big = data;
    }
  });

  return `${big} ${small}`;
}
