let inputText = prompt("Masukkan teks:");

const arrInput = inputText.split("");
console.log(arrInput);

// ["h", "e", "l", "l", '"o"]

const unique = inputInput.filter((item, index) => item.indexOf(item) === index)

const result = unique.map(item => {
    const count = arrInput.filter(data => data === item.length)
    return { [item] : count }
})