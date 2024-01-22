/**
Refine the sayHello function so that it incorporates the tempname variable into a greeting string, forming 'Hello name'.

 */
function sayHello(name) {
  let tempname = "Hello";
  return `${tempname} ${name}`;
}

// Sample usage - do not modify
console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"
