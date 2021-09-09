const hThree = document.querySelector('h3');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.querySelector('.container');

function setGradient () {
    body.style.background = 'linear-gradient(to right, '
    + colorOne.value
    + ', '
    + colorTwo.value
    + ')';

    hThree.textContent = body.style.background + ';';
}

colorOne.addEventListener('input', setGradient);
colorTwo.addEventListener('input', setGradient);