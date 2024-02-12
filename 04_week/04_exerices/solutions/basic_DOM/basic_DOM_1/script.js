/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const changeText = () => {
  const textPlacement = document.getElementById('content');
  textPlacement.textContent = 'Hello World!';
};
