function accum(s) {
  let small = "abcdefghijklmnopqrstuvwxyz";
  let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";
  for (let i = 0; i <= s.length - 1; i++) {
    for (let k = 0; k <= small.length - 1; k++) {
      if (s[i] == small[k] || s[i] == big[k]) {
        result = result + big[k];
        for (let l = 0; l < i; l++) {
          result = result + small[k];
        }
        result = i != s.length - 1 ? result + "-" : result;
      }
    }
  }
  return result;
}
