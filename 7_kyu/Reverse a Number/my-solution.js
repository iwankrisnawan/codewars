function reverseNumber(data) {
    let result = '';
    
    data = `${data}`;
  
    for(let i = data.length - 1; i >= 0; i--){
      if(i == '0' && data[i] == '-'){
        result = '-' + result
      }
      else{
        result = result + data[i];
      }
    }
    return parseInt(result);
  }
  