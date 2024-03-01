document.querySelector('#carFormBtn').addEventListener('click', function () {
  document.querySelector('#carFormSection').style.display = 'block';
  document.querySelector('#carDatabaseSection').style.display = 'none';

  this.classList.add('active');
  document.querySelector('#carDatabaseBtn').classList.remove('active');
});

document.querySelector('#carDatabaseBtn').addEventListener('click', function () {
  document.querySelector('#carFormSection').style.display = 'none';
  document.querySelector('#carDatabaseSection').style.display = 'block';

  this.classList.add('active');
  document.querySelector('#carFormBtn').classList.remove('active');
});

let cars = JSON.parse(localStorage.getItem('cars')) || [];

let addCar = (event) => {
  event.preventDefault();

  let car = {
    licensePlate: document.querySelector('#licensePlate').value,
    maker: document.querySelector('#maker').value,
    model: document.querySelector('#model').value,
    owner: document.querySelector('#owner').value,
    price: document.querySelector('#price').value,
    color: document.querySelector('#color').value,
  };

  cars.push(car);

  localStorage.setItem('cars', JSON.stringify(cars));

  displayCars();
  event.target.reset();
};

let searchCar = (event) => {
  event.preventDefault();

  let searchTerm = document.querySelector('#search').value.toLowerCase();
  let searchParameter = document.querySelector('#searchParameter').value;

  if (!searchTerm) {
    displaySearchError('Search term is required.');
    displayCars(cars);
    return;
  }

  let results = cars.filter((car) => car[searchParameter].toLowerCase().includes(searchTerm));

  if (results.length === 0) {
    displaySearchError(`No car found with ${searchParameter} "${searchTerm}".`);
    displayCars([]);
    return;
  }

  displayCars(results);
};

let displayCars = (carsToDisplay) => {
  let carTableBody = document.querySelector('#carTable tbody');
  carTableBody.innerHTML = '';

  carsToDisplay.forEach((car, index) => {
    let carRow = document.createElement('tr');

    let carData = [index + 1, car.licensePlate, car.maker, car.model, car.owner, car.price, car.color];

    carData.forEach((data) => {
      let cell = document.createElement('td');
      cell.textContent = data;
      carRow.appendChild(cell);
    });

    carTableBody.appendChild(carRow);
  });
};

let displaySearchError = (message) => {
  let searchResults = document.querySelector('#searchResults');
  searchResults.innerHTML = `<p class="text-danger">${message}</p>`;
};

document.querySelector('#carForm').addEventListener('submit', addCar);
document.querySelector('#searchForm').addEventListener('submit', searchCar);

displayCars(cars);
