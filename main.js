let inputText = prompt("Masukkan teks:");

function countChars(inputText) {
    const arrInput = inputText.split("");
    const unique = arrInput.filter((item, index) => item.indexOf(item) === index);
    let final = {}
    unique.map((item) => {
  const count = arrInput.filter((data) => data === item.length);
  final[item] = count;

});

}



// ["h", "e", "l", "l", '"o"]




console.log(result);
