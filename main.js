function countChars(str) {
  const arrInput = str.split(""); //["h", "e", "l", "l", "o"]
  const unique = arrInput.filter(
    (item, index) => arrInput.indexOf(item) === index
  );
//   console.log(unique); //[ 'h', 'e', 'l', 'o' ]
  let final = {};
  unique.map((item) => {
    const count = arrInput.filter((data) => data === item).length;
    final[item] = count;
  });
  return final;
}

console.log(countChars("hello"));
