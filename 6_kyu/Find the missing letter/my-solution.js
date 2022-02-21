function findMissingLetter(array)
{
  let small = "abcdefghijklmnopqrstuvwxyz";
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = "";

  alphabet = (small.search(array[0])>= 0) ? alphabet = small : alphabet = capital;

  let length  = alphabet.length - 1;
  let arrayLength = array.length - 1;
  let start = 0;
  let end = 0;

  for(let i = 0; i <= length; i++){
    if(alphabet[i] == array[0]){
      start = i;
    }
  }

  for(let j = 0; j <= length; j++){
    if(alphabet[j] == array[arrayLength]){
      end = j;
    }
  }
  let item = [];

  let l = 0;
  while(start <= end){
    if(array[l] != alphabet[start]){
      item.push(alphabet[start])
    }
    else{
      l++;
    }
    start++;
  }

  return item.toString();;
}