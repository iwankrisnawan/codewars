var min = function (list) {
  let result = list[0];
  list.map((data) => {
    if (result > data) {
      result = data;
    }
  });
  return result;
};

var max = function (list) {
  let result = list[0];
  list.map((data) => {
    if (result < data) {
      result = data;
    }
  });
  return result;
};
