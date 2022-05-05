function generateHashtag(str) {
  let splitStr = str.split(" ");
  let myArray = [];

  splitStr.forEach((element) => {
    if (element != "") {
      myArray.push(element[0].toUpperCase() + element.substring(1));
    }
  });
  let result = myArray.toString().replace(/,/g, "");
  if (result == "" || result.length > 139) {
    result = false;
  } else {
    result = "#" + result;
  }
  return result;
}
