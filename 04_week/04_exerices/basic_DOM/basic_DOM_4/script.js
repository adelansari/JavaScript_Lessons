const toppingContainer = document.querySelector('.topping-container');
const toppings = ['nuts', 'bananas', 'syrup', 'whippedCream', 'icecream'];
toppings.forEach((topping) => {
  let img = document.createElement('img');
  img.src = `assets/topping-${topping}.webp`;
  img.alt = topping;
  img.classList.add('topping-image');

  toppingContainer.appendChild(img);
});

const pancakeType = document.querySelector('#type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPrice = document.querySelectorAll('.totalPrice');
const pancakeImage = document.querySelector('.pancake-image');
const imageContainer = document.querySelector('.image-container');
const toppingImage = document.querySelectorAll('.topping-image');
const discountPriceSpan = document.querySelector('.discount-price');
const easterEgg = document.querySelector('.popup');
const hintText = document.querySelector('.popuptext');
const konamiCodeDiv = document.querySelector('.konami-code');
const konamiCodeSuccessDiv = document.querySelector('.konami-code-success');
const discountLabel = document.querySelector('.discount-label');

const createAndAppendTopping = (topping) => {
  let img = document.createElement('img');
  img.src = `assets/topping-${topping}.webp`;
  img.alt = topping;
  img.classList.add('topping-image');

  toppingContainer.appendChild(img);
};

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
  let price = parseInt(pancakeType.value);
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      toppingImage[index].classList.add('visible');
      price += parseInt(checkbox.value);
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

  // update Discount Price
  let discountedPrice = price - 2;
  discountPriceSpan.textContent = `€${discountedPrice}`;
  discountPriceSpan.style.transform = 'scale(1.5)';
  setTimeout(() => {
    discountPriceSpan.style.transform = 'scale(1)';
  }, 500);
};

let isHintShown = false;
const showHint = () => {
  hintText.classList.toggle('show');
  isHintShown = !isHintShown; // toggle the state
};

const handleKonamiCode = (e) => {
  // to stop handling key presses
  if (konamiCodeDiv.style.color === 'limegreen') {
    return;
  }

  keys.push(e.key);
  keys = keys.slice(-secretCode.length); // keep only the last 'secretCode.length' pressed keys

  konamiCodeDiv.textContent = keys.map((key) => keySymbols[key] || key).join(' ');

  if (keys.join('') === secretCode.join('')) {
    if (isHintShown) {
      showHint();
    }
    konamiCodeDiv.style.color = 'limegreen';
    konamiCodeSuccessDiv.style.display = 'block';

    // show the discount-label
    calculatePrice();
    discountLabel.style.display = 'block';
  }
};

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
};

const handleSwipe = () => {
  let swipeDirection;

  if (Math.abs(touchEndX - touchStartX) > Math.abs(touchEndY - touchStartY)) {
    // horizontal swipe
    swipeDirection = touchEndX > touchStartX ? 'ArrowRight' : 'ArrowLeft';
  } else {
    // vertical swipe
    swipeDirection = touchEndY > touchStartY ? 'ArrowDown' : 'ArrowUp';
  }

  keys.push(swipeDirection);
  keys = keys.slice(-secretCode.length); // keep only the last 'secretCode.length' pressed keys

  if (keys.join('') === secretCode.join('')) {
    if (isHintShown) {
      showHint();
    }
    konamiCodeDiv.style.color = 'limegreen';
    konamiCodeSuccessDiv.style.display = 'block';

    // show the discount-label
    calculatePrice();
    discountLabel.style.display = 'block';
  }
  checkKonamiCode();
};

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);

document.querySelector('#button-a').addEventListener('click', () => {
  keys.push('a');
  checkKonamiCode();
});

document.querySelector('#button-b').addEventListener('click', () => {
  keys.push('b');
  checkKonamiCode();
});

// show buttons if user is on mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.querySelector('#button-a').style.display = 'block';
  document.querySelector('#button-b').style.display = 'block';
}

let keys = [];
const secretCode = [
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

const keySymbols = {
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
};

toppings.forEach(createAndAppendTopping);
pancakeType.addEventListener('change', calculatePrice);
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', calculatePrice));
easterEgg.addEventListener('click', showHint);
document.addEventListener('keydown', handleKonamiCode);
