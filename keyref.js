let text = document.querySelector('.text')
let elementName = document.querySelector('.name')
let title = document.querySelector('.title')

document.addEventListener("keyup", e => {
    text.textContent = `"${e.key}"`;
    elementName.textContent = e.code;
} )