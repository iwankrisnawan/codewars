function modifiedSum(arr, n) {
  let sub1 = 0;
  let sub2 = 0;
  arr.map((data) => {
    let d = data;
    sub2 = sub2 + data;
    for (let i = 1; i < n; i++) {
      data = data * d;
    }
    sub1 = sub1 + data;
  });

  return sub1 - sub2;
}
