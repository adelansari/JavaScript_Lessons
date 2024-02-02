# DOM

## Invoking Functions in HTML and JavaScript

Integrating JavaScript functions with HTML elements is crucial for interactive web development.

### Invoking Functions from HTML

You can directly call JavaScript functions from HTML elements using event attributes. This approach is straightforward and commonly used for simple interactions.

#### Example: onClick Event

```html
<button onclick="showAlert()">Click Me</button>

<script>
  function showAlert() {
    alert('Button clicked!');
  }
</script>
```

This button, when clicked, invokes the `showAlert` JavaScript function, displaying an alert box.

### Invoking Functions from JavaScript

JavaScript also allows you to programmatically attach event listeners to elements, providing greater flexibility and control over event handling.

#### Example: addEventListener Method

```javascript
document.getElementById('myButton').addEventListener('click', function () {
  alert('Button clicked!');
});
```

In this example, an event listener is added to a button with the ID `myButton`. When the button is clicked, an anonymous function displays an alert.

### Differences and Best Practices

- **Separation of Concerns**: Using `addEventListener` in JavaScript separates the HTML structure from the behavior, adhering to the best practices of web development.
- **Flexibility**: JavaScript-invoked functions allow for more complex interactions, such as attaching multiple event listeners to the same element or dynamically adding or removing event listeners.
- **Compatibility**: While inline event handlers (`onclick` in HTML) are widely supported and easy to use, they offer less flexibility and can lead to code that is harder to maintain and debug.

## Event types

Here's a list of the most common event types that beginners should be familiar with when starting with JavaScript event handling.

1. **`click`**: Triggered when an element is clicked.
2. **`dblclick`**: Triggered when an element is double-clicked.
3. **`mouseover`**: Fired when the mouse pointer is moved over an element.
4. **`mouseout`**: Fired when the mouse pointer moves out of an element.
5. **`mousedown`**: Occurs when the mouse button is pressed on an element.
6. **`mouseup`**: Occurs when a mouse button is released over an element.
7. **`mousemove`**: Triggered when the mouse is moved.
8. **`keydown`**: Fired when a key is pressed down.
9. **`keyup`**: Occurs when a key is released.
10. **`keypress`**: Triggered when a key is pressed and released.
11. **`change`**: Fired for `<input>`, `<select>`, and `<textarea>` when a change to the element's value is committed by the user.
12. **`submit`**: Occurs when a form is submitted.
13. **`load`**: Fired when a resource and its dependent resources have finished loading.
14. **`unload`**: Triggered when the document or a child resource is being unloaded.
15. **`resize`**: Occurs when the document view or an element has been resized.
16. **`scroll`**: Fired when the document view or an element is scrolled.
17. **`focus`**: Triggered when an element has received focus.
18. **`blur`**: Fired when an element has lost focus.

These events cover a wide range of interactions, from user input via mouse and keyboard to the lifecycle events of the webpage itself. By attaching event listeners to these events, you can make your web pages react in dynamic and interactive ways to user actions.

## DOM selectors

DOM selectors allow you to select and manipulate HTML elements.

### getElementById

Selects a single element by its ID.

```js
const element = document.getElementById('uniqueElement');
```

### getElementsByClassName

Selects all elements that share a specific class name.

```js
const elements = document.getElementsByClassName('sharedClass');
```

### getElementsByTagName

Selects all elements with a specific tag name.

```js
const elements = document.getElementsByTagName('div');
```

### querySelector

Selects the first element that matches a specified CSS selector.

```js
const firstMatch = document.querySelector('.classSelector');
```

### querySelectorAll

Selects all elements that match a specified CSS selector.

```js
const allMatches = document.querySelectorAll('p.highlight');
```

## Manipulating Content and Attributes

Once you've selected elements, you can manipulate their content and attributes.

### InnerText vs. TextContent

`innerText` retrieves and sets the visible text contained in a node, while `textContent` gets and sets the full text.

```js
element.innerText = 'Visible text';
element.textContent = 'Full text, including script and style elements';
```

### innerHTML

`innerHTML` allows getting and setting the HTML content of an element.

```js
element.innerHTML = '<strong>Bold text</strong>';
```

NOTE! Be cautious with `innerHTML` due to the risk of Cross-Site Scripting (XSS) attacks. Never use innerHTML with untrusted data. Use `innerHTML` for static content or when you control the HTML content completely, ensuring it is sanitized.
