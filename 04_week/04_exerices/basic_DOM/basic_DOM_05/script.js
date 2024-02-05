let form = document.querySelector('.form-container');

const priceCalc = () => {
  let typeSelect = document.querySelector('#type');
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let priceBanner = document.querySelector('#totalPrice');

  let totalAmount = parseInt(typeSelect.value);
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
  }
  priceBanner.textContent = `$${totalAmount}`;
};

form.addEventListener('change', priceCalc);
