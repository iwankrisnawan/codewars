function reverseLetter(str) {

    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let myData = '';
  
    for(let i = 0; i < str.length; i++){
      for(let m = 0; m < abc.length; m++){
        if(str[i] == abc[m]){
          myData = myData + str[i];
        }
      }
    }
  
    let result = '';
    for(let k = myData.length - 1; k >= 0; k--){
      result = result + myData[k];
    }
  
    return result;
  }