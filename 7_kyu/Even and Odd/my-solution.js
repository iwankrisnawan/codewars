function evenAndOdd(num) {
  let data = `${num}`;
  let ne = "";
  let no = "";
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i] != 0) {
      if (data[i] % 2 == 0) {
        ne = ne + data[i];
      } else {
        no = no + data[i];
      }
    } else {
      if (ne[ne.length - 1] % 2 == 0) {
        ne = ne + data[i];
      }
    }
  }
  no = no == "" ? 0 : no;
  ne = ne == "" ? 0 : ne;
  return [eval(ne), eval(no)];
}
