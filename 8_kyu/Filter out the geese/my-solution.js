function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];

  for (let i = 0; i <= birds.length - 1; i++) {
    result.push(birds[i]);
    for (let k = 0; k <= geese.length - 1; k++) {
      if (birds[i] == geese[k]) {
        result.splice(-1); // remove last data array
      }
    }
  }
  return result;
}
