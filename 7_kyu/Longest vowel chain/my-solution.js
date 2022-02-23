function solve(s) {
    let aiueo = "aiueo";
    let total = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      if( s[i] == aiueo[0] || s[i] == aiueo[1] || s[i] == aiueo[2] || s[i] == aiueo[3] || s[i] == aiueo[4]) {
        total = total + 1;
      } else {
        if(total >= result){
            result = total;
          }
        total = 0;
      }
    }
    return result;
  }