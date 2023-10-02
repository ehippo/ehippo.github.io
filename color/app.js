const colors = ["green", "red", "rgba(133, 122, 208)", "#f15825"]
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B', 'C', 'D', 'E', 'F']

const btnRandom = document.getElementById("btnRandom")
const btnRandomHex = document.getElementById("btnRandomHex")
const color = document.querySelector(".color")

btnRandom.addEventListener('click', function() {
    const randomNumber = getRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

btnRandomHex.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i<6; i++) {
        hexColor += getRandomNumber(16).toString(16) // hex[Math.floor(Math.random() * hex.length)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}