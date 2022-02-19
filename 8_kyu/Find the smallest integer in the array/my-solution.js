class SmallestIntegerFinder {
    findSmallestInt(args) {
      let myArray = args;
      let length = args.length;
      let chose = '';
  
      for(let i = 0; i < length; i++){
      if(i == 0){
        chose = myArray[i];
      }     
      else{
        if(chose > myArray[i]){
          chose = myArray[i];
        }
      }
      }
      return chose;
    }
  }