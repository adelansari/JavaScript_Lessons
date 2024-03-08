// const fetchData = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => displayData(json));
// };

// Posts
const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Error status: ${response.status}');
    }
    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.error(error);
  }
};

const displayPosts = (data) => {
  const container = document.querySelector('#post-container');

  data.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `;
    container.appendChild(postElement);
  });
};

// Users
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Error status: ${response.status}');
    }
    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    console.error(error);
  }
};

const displayUsers = (data) => {
  const container = document.querySelector('#user-container');

  data.forEach((user) => {
    const userElement = document.createElement('div');
    const { street, suit, city, zipcode, geo } = user.address;
    const { lat, lng } = geo;
    userElement.innerHTML = `
      <p>Name: <span>${user.name}</span></p>
      <p>Username: <span>${user.username}</span></p>
      <p>Email: <span>${user.email}</span></p>
      <p>Address: <span>${street}</span>, <span>${suit}</span>, <span>${city}</span>, <span>${zipcode}</span></p>
      <p>Geo: Lat <span>${lat}</span> <span>${lng}</span></p>
      <p>Website: <span>${user.website}</span></p>
      `;
    container.appendChild(userElement);
  });
};

// fetch and display posts
// fetchPosts();
fetchUsers();
