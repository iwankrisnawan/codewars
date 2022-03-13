function tapCodeTranslation(text) {
    let trst = [
      [
        ['a', 'f', 'l', 'q', 'v'],
        ['b', 'g', 'm', 'r', 'w'],
        ['c', 'k', 'h', 'n', 's', 'x'],
        ['d', 'i', 'o', 't', 'y'],
        ['e', 'j', 'p', 'u', 'z']
      ],
  
      [
        ['a', 'b', 'c', 'k', 'd', 'e'],
        ['f', 'g', 'h', 'i', 'j'],
        ['l', 'm', 'n', 'o', 'p'],
        ['q', 'r', 's', 't', 'u'],
        ['v', 'w', 'x', 'y', 'z']
      ]
    ];
  
    let result = '';
    let sample = '';
    let dot = '';
    let number = 0;
  
    for(let i = 0; i <= text.length; i++){
      sample = text[i];
  
      dot = '';
      trst.map((ddd, index) => {
        if(index == 0){
          ddd.map((dd) => {
            dd.map((d) => {
              number = (number <= dd.length? number + 1: 1);
              if(sample == d){
                number = (dd.length == 6 && number > 1 ? number - 1 : number);
                for(let k = 1; k <= number; k++){
                  dot = dot + '.';
                }
                dot = dot + ' ';
              }
            });
            number = 0;
          })
        }
  
        if(index == 1){
          ddd.map((dd) => {
            dd.map((d) => {
              number = (number <= dd.length? number + 1: 1);
              if(sample == d){
                number = (dd.length == 6 && number > 3 ? number - 1 : number);
                for(let k = 1; k <= number; k++){
                  dot = dot + '.';
                }
                dot = dot + ' ';
              }
            });
            number = 0;
          })
        }
      });
  
      result = result + dot;
  
    }
  
    let output ='';
    for(let j =0; j <= result.length; j++){
      if(j < result.length -1){
        output = output + result[j];
      }
    }
    return output;
  
  }
  