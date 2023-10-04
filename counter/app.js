

const counter = document.getElementById('counter')
const btnIncrement = document.getElementById('btnIncrement')
const btnDecrement = document.getElementById('btnDecrement')
const btnReset = document.getElementById('btnReset')

btnIncrement.addEventListener('click', function() {
    counter.textContent++
})

btnDecrement.addEventListener('click', function() {
    counter.textContent--
})

btnReset.addEventListener('click', function() {
    counter.textContent = 0
})

console.log(btnIncrement)