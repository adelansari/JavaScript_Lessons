let currentPage = 1;
const limit = 20;
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
let pokemons = [];

const searchBar = document.querySelector('#search-bar');

const fetchPokemon = async (page = 1) => {
  const offset = (page - 1) * limit;
  try {
    const response = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }
    const data = await response.json();
    pokemons = data.results;
    displayPokemons(pokemons);
    displayPagination(page);
  } catch (error) {
    console.error(error);
  }
};

const displayPokemons = (pokemons) => {
  const container = document.querySelector('#pokemon-container');
  container.innerHTML = ''; // clear the container

  pokemons.forEach((pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.innerHTML = `
      <h2>${pokemon.name}</h2>
      `;
    container.appendChild(pokemonElement);
  });
};

const displayPagination = (page) => {
  const pagination = document.querySelector('#pagination');
  pagination.innerHTML = ''; // clear the pagination

  if (page > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous Page';
    prevButton.addEventListener('click', () => {
      currentPage--;
      fetchPokemon(currentPage);
    });
    pagination.appendChild(prevButton);
  }

  const currentPageSpan = document.createElement('span');
  currentPageSpan.textContent = `Page ${page}`;
  pagination.appendChild(currentPageSpan);

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next Page';
  nextButton.addEventListener('click', () => {
    currentPage++;
    fetchPokemon(currentPage);
  });
  pagination.appendChild(nextButton);
};

const searchPokemons = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.includes(searchTerm));
  displayPokemons(filteredPokemons);
};

// Event listeners
searchBar.addEventListener('input', searchPokemons);

// Fetch the initial pokemon data
fetchPokemon(currentPage);
