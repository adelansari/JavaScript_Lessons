const pancakeType = document.querySelector('#type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPrice = document.querySelectorAll('.totalPrice');

const calculatePrice = () => {
  let price = parseFloat(pancakeType.value);
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      price += parseFloat(checkbox.value);
    }
  });
  totalPrice.forEach((element) => (element.textContent = `€${price.toFixed(2)}`));
};

pancakeType.addEventListener('change', calculatePrice);
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', calculatePrice));

calculatePrice();

const updatePriceWithAnimation = (newPrice) => {
  totalPrice.textContent = `€${newPrice.toFixed(2)}`;
  totalPriceB.textContent = `€${newPrice.toFixed(2)}`;

  anime({
    targets: [totalPrice, totalPriceB],
    scale: [1, 1.2, 1],
    duration: 500,
    easing: 'easeOutBounce',
  });
};
