function isSameLanguage(list) {
    let result = true;
    let language = list[0].language;
    for(let i= 0; i <= list.length -1; i++){
      if(list[i].language != language){
        result = false;
      }
    }
    return result;
  }
  