function countDevelopers(list) {
  let result = 0;

  list.map((data) => {
    if (data.language == "JavaScript" && data.continent == "Europe") {
      result++;
    }
  });
  return result;
}
