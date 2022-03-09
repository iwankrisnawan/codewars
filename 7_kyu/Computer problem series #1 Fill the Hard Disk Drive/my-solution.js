function save(sizes, hd) {
  let total = 0;
  let result = 0;
  for (let i = 0; i <= sizes.length - 1; i++) {
    if (total + sizes[i] <= hd) {
      total = total + sizes[i];
      result++;
    } else {
      break;
    }
  }

  return result;
}
