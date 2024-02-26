class Car {
  constructor(licensePlate, maker, model, owner, price, color) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

let cars = [];

document.querySelector('#carForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let car = new Car(
    document.querySelector('#licensePlate').value,
    document.querySelector('#maker').value,
    document.querySelector('#model').value,
    document.querySelector('#owner').value,
    document.querySelector('#price').value,
    document.querySelector('#color').value
  );

  cars.push(car);
  displayCars();
  event.target.reset();
});

document.querySelector('#searchForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let search = document.querySelector('#search').value;
  let results = cars.filter((car) => car.licensePlate.includes(search));
  displaySearchResults(results);
});

function displayCars() {
  let carTable = document.querySelector('#carTable');
  carTable.innerHTML = '<h2>Car Database</h2>';

  cars.forEach((car) => {
    let carDiv = document.createElement('div');
    carDiv.textContent = `License Plate: ${car.licensePlate}, Maker: ${car.maker}, Model: ${car.model}, Owner: ${car.owner}, Price: ${car.price}, Color: ${car.color}`;
    carTable.appendChild(carDiv);
  });
}

function displaySearchResults(results) {
  let searchResults = document.querySelector('#searchResults');
  searchResults.innerHTML = '<h2>Search Results</h2>';

  results.forEach((car) => {
    let resultDiv = document.createElement('div');
    resultDiv.textContent = `License Plate: ${car.licensePlate}, Maker: ${car.maker}, Model: ${car.model}, Owner: ${car.owner}, Price: ${car.price}, Color: ${car.color}`;
    searchResults.appendChild(resultDiv);
  });
}
