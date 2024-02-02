const text = document.querySelector('h1');
const text2 = document.querySelector('#first');
const text3 = document.querySelector('.second');

const longText = document.querySelectorAll('p');

console.log(text.textContent);
console.log(text2.textContent);
console.log(text3.textContent);
console.log(longText);

const myFunction1 = () => alert('onclick event, function mentioned in HTML');

const myFunction2 = () => alert('addeventlistener example');

// that is how I select a button
const button = document.querySelector('#myButton');
button.addEventListener('submit', myFunction2);

/* myFunction1(); */
