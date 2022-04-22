function findSum() {
  let total = 0;
  if (arguments.length > 0) {
    for (let i = 0; i <= arguments.length - 1; i++) {
      if (arguments[i] < 0) {
        return -1;
      }
      total = total + arguments[i];
    }
  }

  return total;
}
