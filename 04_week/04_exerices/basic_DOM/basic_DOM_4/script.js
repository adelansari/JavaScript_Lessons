const pancakeType = document.querySelector('#type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPrice = document.querySelector('#totalPrice');

const calculatePrice = () => {
  let price = parseFloat(pancakeType.value);
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      price += parseFloat(checkbox.value);
    }
  });
  totalPrice.textContent = `€${price.toFixed(2)}`;
};

pancakeType.addEventListener('change', calculatePrice);
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', calculatePrice));

calculatePrice();
