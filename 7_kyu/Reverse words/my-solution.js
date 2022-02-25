function reverseWords(str){
    let data = str.split(" ");
    let result = '';
    for(let i = 0; i <= data.length - 1; i++){
      for(let k = data[i].length - 1; k >= 0; k--){
        result = result + data[i][k];
      }
      result = (i != data.length - 1) ? result + ' ' : result;
    }
    return result;
  }
  