# DOM Manipulation

DOM manipulation is a fundamental aspect of using JavaScript to improve the interactivity and functionality of your web pages. Understanding how to change the DOM enables you to dynamically add, remove, and modify the elements and their styles on your webpage.

## `classList` Object

The `classList` is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. It provides methods to add, remove, and toggle CSS classes on an element.

### Adding a Class

You can add a class to an element using the `add` method:

```javascript
document.getElementById('myElement').classList.add('myClass');
```

This code will add the class `myClass` to the element with the ID `myElement`.

### Removing a Class

Similarly, you can remove a class from an element:

```javascript
document.getElementById('myElement').classList.remove('myClass');
```

This removes `myClass` from your element, altering its style if `myClass` was applied in the CSS.

### Toggling a Class

The `toggle` method adds a class if it's not present or removes it if it is:

```javascript
document.getElementById('myElement').classList.toggle('myClass');
```

This is particularly useful for implementing interactive features like drop-down menus or dark mode themes.

## Handling `window.onscroll` Events

The `window.onscroll` event triggers every time the window is scrolled and can be used to create dynamic effects such as hiding or showing a navigation bar:

```javascript
window.onscroll = function () {
  // Your logic here
};
```

For example, you can change the navigation bar's style based on the scroll position:

```javascript
window.onscroll = function () {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
```

## Manipulating Styles with JavaScript

JavaScript allows you to directly manipulate the styles of HTML elements. This is done by accessing the `style` property of an element:

```javascript
document.getElementById('myElement').style.backgroundColor = 'blue';
```

This line of code changes the background color of the element with the ID `myElement` to blue. It's a powerful feature that should be used judiciously, as inline styles added through JavaScript can override styles from your CSS files.

### Setting Multiple Styles

You can also set multiple styles by chaining them together:

```javascript
var myElement = document.getElementById('myElement');
myElement.style.color = 'white';
myElement.style.backgroundColor = 'black';
myElement.style.padding = '10px';
```

This will change the text color, background color, and padding of `myElement`.

## Throttling and Debouncing

Understanding throttling and debouncing is crucial for optimizing web applications, especially when dealing with events that can fire frequently, such as scroll, resize, or keypress events. Implementing these techniques can significantly enhance the performance and user experience of your web application.

### Throttling

Throttling is a technique used to limit the number of times a function can execute over a period. This is particularly useful for controlling the rate at which a function is executed in response to an event.

Throttling ensures that a function, despite being called multiple times, is only executed once every specified number of milliseconds. This means the function will execute regularly but no more often than the throttle threshold allows.

#### Use Cases

- **Scroll Events:** Prevent excessive handling of scroll events for actions like showing or hiding elements based on the scroll position.
- **Window Resize:** Limit the rate at which a resize event callback is executed to avoid performance bottlenecks during browser window resizing.

```javascript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
```

This function ensures that `func` is executed at most once every `limit` milliseconds.

[Read more from dev.to](https://dev.to/jeetvora331/throttling-in-javascript-easiest-explanation-1081)

### Debouncing

Debouncing is a technique that postpones the execution of a function until a certain amount of time has passed since the last time it was invoked. This is especially useful for events that you only want to handle after some idle time, like a pause in typing.

Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As a result, the function will be called after the event has stopped firing for the specified duration.

### Use Cases

- **Search Bar Input:** Wait for the user to stop typing before making an AJAX request to autocomplete suggestions.
- **Window Resize:** Delay the execution of a callback function until the resizing has stopped, to avoid unnecessary calculations or updates.

```javascript
function debounce(func, delay) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}
```

This function ensures that `func` is executed only after the specified `delay` has elapsed since the last time the debounced function was invoked.
[Read more from dev.to](https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc)

Both throttling and debouncing are essential techniques in optimizing event-driven code in JavaScript. By understanding and applying these concepts, developers can improve the performance and responsiveness of their web applications, ensuring a smooth and efficient user experience. Choose the technique that best fits your scenario, or sometimes, a combination of both might be the most effective solution.
