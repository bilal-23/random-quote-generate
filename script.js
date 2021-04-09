const { default: VanillaTilt } = require("vanilla-tilt");

const text = document.querySelector('.text')
const author = document.querySelector('.author')
const quoteBtn = document.querySelector('.generate')

const newQuote = async function () {
    const res = await fetch(`https://type.fit/api/quotes`)
    const data = await res.json();
    const index = Math.floor(randomNumber(data))
    const quote = (data[index]);
    clearText();
    text.textContent = quote.text;
    author.textContent = quote.author

}



function randomNumber(data) {
    const max = data.length;
    return Math.random() * (max - 0) + 0;
}

function clearText() {
    text.textContent = "";
    author.textContent = "";
}

quoteBtn.addEventListener('click', newQuote)