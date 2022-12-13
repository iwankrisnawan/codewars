function function_check(data){
    let result = '1';
    for (let index = 1; index < eval(data); index++) {
      result = result + '0';  
    }
    return result;
  }
  
  function expandedForm(data){
  
    let dataNumber = data;
    let lastResult = '';
  
    while(dataNumber > 0){
      let resultCheck = function_check(dataNumber.toString().length);
      let r = Math.floor(dataNumber / resultCheck);
      dataNumber = dataNumber - (resultCheck * r);
      lastResult = lastResult + (resultCheck * r).toString();
      if(dataNumber > 0){
        lastResult = lastResult + " + ";
      }
    }
  
    return lastResult
  }
  