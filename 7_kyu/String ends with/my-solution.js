function solution(str, ending) {
  let last = "";
  for (let i = ending.length - 1; i >= 0; i--) {
    last = last + str[str.length - 1 - i];
  }
  if (last != ending) {
    return false;
  }
  return true;
}
