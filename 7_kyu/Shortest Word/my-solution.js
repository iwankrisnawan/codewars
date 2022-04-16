function findShort(s) {
  let data = s.split(" ");
  let short = data[0].length;

  data.forEach((dat) => {
    if (dat.length <= short) {
      short = dat.length;
    }
  });

  return short;
}
