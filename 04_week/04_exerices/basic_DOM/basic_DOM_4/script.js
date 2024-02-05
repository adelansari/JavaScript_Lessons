const toppings = ['nuts', 'bananas', 'syrup', 'whippedCream', 'icecream'];
const toppingContainer = document.querySelector('.topping-container');

toppings.forEach((topping) => {
  let img = document.createElement('img');
  img.src = `assets/topping-${topping}.webp`;
  img.alt = topping;
  img.classList.add('topping-image');

  toppingContainer.appendChild(img);
});

let pancakeType = document.querySelector('#type');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let totalPrice = document.querySelectorAll('.totalPrice');
let pancakeImage = document.querySelector('.pancake-image');
let imageContainer = document.querySelector('.image-container');
let toppingImage = document.querySelectorAll('.topping-image');

const calculatePrice = () => {
  switch (pancakeType.value) {
    case '5':
      pancakeImage.src = 'assets/pancake-classic.webp';
      break;
    case '6':
      pancakeImage.src = 'assets/pancake-chocolate.webp';
      break;
    case '7':
      pancakeImage.src = 'assets/pancake-blueberry.webp';
      break;
  }
  let price = parseFloat(pancakeType.value);
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      toppingImage[index].classList.add('visible');
      price += parseFloat(checkbox.value);
    } else {
      toppingImage[index].classList.remove('visible');
    }
  });
  totalPrice.forEach((element) => {
    element.style.transform = 'scale(2.5)';
    element.style.color = 'aquamarine';
    element.textContent = `€${price}`;

    setTimeout(() => {
      element.style.transform = 'scale(1)';
      element.style.color = '';
    }, 500);
  });
};

pancakeType.addEventListener('change', calculatePrice);
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', calculatePrice));

let easterEgg = document.querySelector('.popup');
let hintText = document.querySelector('.popuptext');
const showHint = () => {
  hintText.classList.toggle('show');
};
easterEgg.addEventListener('click', showHint);

// keypress event for konami code ↑↑↓↓←→←→BA
let keys = [];
let secretCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

let keySymbols = {
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
};

let konamiCodeDiv = document.querySelector('.konami-code');
let konamiCodeSuccessDiv = document.querySelector('.konami-code-success');

document.addEventListener('keydown', (e) => {
  // If the text color is green, stop handling key presses
  if (konamiCodeDiv.style.color === 'green') {
    return;
  }

  keys.push(e.key);
  keys = keys.slice(-secretCode.length); // keep only the last 'secretCode.length' pressed keys

  konamiCodeDiv.textContent = keys.map((key) => keySymbols[key] || key).join(' ');

  if (keys.join('') === secretCode.join('')) {
    showHint();
    konamiCodeDiv.style.color = 'green';
    konamiCodeSuccessDiv.style.display = 'block';

    let discountPriceSpan = document.querySelector('.discount-price');

    // Calculate the discounted price
    let discountedPrice = parseInt(totalPrice[0].textContent, 10) - 2;

    // Update the text content of the discount-price span
    discountPriceSpan.textContent = discountedPrice.toString();

    // Show the discount-label
    const discountLabel = document.querySelector('.discount-label');
    discountLabel.style.display = 'block';
  }
});
