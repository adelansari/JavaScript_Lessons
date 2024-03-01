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

let addCar = (event) => {
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
};

let displayCars = () => {
  let carTable = document.querySelector('#carTable');

  while (carTable.firstChild) {
    carTable.removeChild(carTable.firstChild);
  }

  let headers = ['License Plate', 'Maker', 'Model', 'Owner', 'Price', 'Color'];
  carTable.appendChild(createRow(headers, 'th'));

  cars.forEach((car) => {
    carTable.appendChild(createRow(Object.values(car), 'td'));
  });
};

let createRow = (values, cellType) => {
  let row = document.createElement('tr');
  values.forEach((value) => {
    let cell = document.createElement(cellType);
    cell.textContent = value;
    row.appendChild(cell);
  });
  return row;
};

let searchCar = (event) => {
  event.preventDefault();

  let searchTerm = document.querySelector('#search').value.toLowerCase();
  if (!searchTerm) {
    displaySearchError('Search term is required.');
    return;
  }

  let results = cars.filter((car) => car.licensePlate.toLowerCase().includes(searchTerm));
  displaySearchResults(results);
};

let displaySearchResults = (results) => {
  let searchResults = document.querySelector('#searchResults');

  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }

  if (results.length === 0) {
    let item = document.createElement('li');
    item.textContent = 'No results found.';
    searchResults.appendChild(item);
  } else {
    let headers = ['License Plate', 'Maker', 'Model', 'Owner', 'Price', 'Color'];
    searchResults.appendChild(createRow(headers, 'th'));

    results.forEach((car) => {
      searchResults.appendChild(createRow(Object.values(car), 'td'));
    });
  }
};

let displaySearchError = (message) => {
  let searchResults = document.querySelector('#searchResults');

  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }

  let item = document.createElement('li');
  item.textContent = `Error: ${message}`;
  searchResults.appendChild(item);
};

document.querySelector('#carForm').addEventListener('submit', addCar);
document.querySelector('#searchForm').addEventListener('submit', searchCar);
