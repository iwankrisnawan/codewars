function countSalutes(hallway) {
  let length = hallway.length;

  let saluteRight = 0;
  let saluteLeft = 0;

  for (let i = 0; i < length; i++) {
    if (hallway[i] == ">") {
      for (let j = i; j < length; j++) {
        if (hallway[j] == "<") {
          saluteRight = saluteRight + 1;
        }
      }
    }
  }

  for (let k = length - 1; k >= 0; k--) {
    if (hallway[k] == "<") {
      for (let m = k; m >= 0; m--) {
        if (hallway[m] == ">") {
          saluteLeft = saluteLeft + 1;
        }
      }
    }
  }

  return saluteRight + saluteLeft;
}
