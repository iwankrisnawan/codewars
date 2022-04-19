function dontGiveMeFive(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().split("5").length == 1) {
      total = total + 1;
    }
  }
  return total;
}
