function doubleChar(str) {
    let result = '';
    for(let i = 0; i <= str.length -1; i++){
      result = result + str[i] +str[i]
    }
    return result;
  }
  