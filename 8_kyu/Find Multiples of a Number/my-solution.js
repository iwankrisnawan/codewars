function findMultiples(integer, limit) {
  let result = [];
  let multi = integer;
  while (multi <= limit) {
    result.push(multi);
    multi = multi + integer;
  }
  return result;
}
