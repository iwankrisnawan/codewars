function sumStr(a, b) {
  a = a == "" ? 0 : a;
  b = b == "" ? 0 : b;
  let result = eval(a) + eval(b);

  return result.toString();
}
