/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

let content = document.getElementById('content');

const updateText = () => {
  return (content.textContent = 'Hello, World!');
};
