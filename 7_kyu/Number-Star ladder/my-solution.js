function pattern(n) {
  var output = "1\n";
  for (let i = 2; i <= n; i++) {
    output = output + "1";
    for (let k = 1; k < i; k++) {
      output = output + "*";
    }
    output = output + i.toString();
    output = i != n ? output + "\n" : output;
  }
  return output;
}
