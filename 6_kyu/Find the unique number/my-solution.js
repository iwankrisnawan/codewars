function findUniq(numbers) {
  let a = [numbers[0]];
  let b = [];

  numbers.forEach((e, key) => {
    if (key != 0) {
      if (e == a[0]) {
        a.push(e);
      } else {
        b.push(e);
      }
    }
  });

  if (b.length > a.length) {
    return a[0];
  }
  return b[0];
}
