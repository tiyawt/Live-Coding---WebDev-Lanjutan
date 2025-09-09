function countChars(str) {
  const arrInput = str.split("");
  const unique = arrInput.filter((item, index) => item.indexOf(item) === index);
  let final = {};
  unique.map(item => {
    const count = arrInput.filter((data) => data === item).length;
    final[item] = count;
  });
  return final;
}

console.log(countChars("hello"));
