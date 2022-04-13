function countSheeps(arrayOfSheep) {
  let total = 0;
  arrayOfSheep.forEach((element) => {
    if (element == true) {
      total = total + 1;
    }
  });
  return total;
}
