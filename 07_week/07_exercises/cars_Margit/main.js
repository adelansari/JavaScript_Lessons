'use strict';
const addCarForm = document.querySelector('#addCar');
const searchCarForm = document.querySelector('#searchForm');

const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (event) => {
  event.preventDefault();
  const license = document.querySelector('#license').value;
  const maker = document.querySelector('#maker').value;
  const model = document.querySelector('#model').value;
  const owner = document.querySelector('#owner').value;
  const price = document.querySelector('#price').value;
  const color = document.querySelector('#color').value;

  const newCar = new Car(license, maker, model, owner, price, color);
  cars.push(newCar);

  displayTable();
  addCarForm.reset();
};

const displayTable = () => {
  const table = document.querySelector('#carsTable');

  table.innerHTML = table.rows[0].innerHTML;

  cars.forEach((car) => {
    const row = table.insertRow(-1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

const searchCar = (e) => {
  e.preventDefault();
  const licenseQuery = document.querySelector('#search').value.trim().toLowerCase();
  const display = document.querySelector('#searchResult');
  if (!licenseQuery) {
    display.textContent = 'Please enter a license plate to search.';
  }

  try {
    const result = cars.find(({ license }) => license.toLowerCase().includes(licenseQuery));
    display.textContent = result
      ? `Found ${result.maker}, ${result.model}, owned by ${result.owner}`
      : 'No car with that license plate';
  } catch (error) {
    console.error('Error Occured:', error);
    display.textContent = 'Something went wrong. Come back later.';
  }
};

addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);
