# JavaScript writing rules

Creating clean, maintainable, and error-free JavaScript code is essential for both beginners and experienced developers alike.

## Use `"use strict"`

- **Activate Strict Mode:** Always use `"use strict"` at the beginning of your JavaScript files or functions to enforce stricter parsing and error handling. This helps catch common coding mistakes and prevents the use of certain features that could lead to vulnerabilities in your code.

`"use strict"` is a more secure and error-proof way of writing JavaScript code. Introduced in ECMAScript 5, strict mode makes several changes to normal JavaScript semantics:

- Catches quiet errors: Normally, some mistakes in code might not cause visible errors. Strict mode changes this by showing an error instead, which helps find and fix issues easier.
- Improves performance: Code in strict mode can run faster. This is because it makes the code easier for JavaScript engines to optimize.
- Prepares for the future: It stops you from using certain code patterns that might conflict with future updates of JavaScript, helping keep your code up-to-date.

## Adopt Consistent Formatting

- **Indentation:** Use consistent indentation (such as 2 or 4 spaces) to make your code more readable.
- **Semicolons:** While JavaScript engines can insert semicolons automatically, explicitly adding them at the end of statements can prevent potential errors.
- **Curly Braces:** Use curly braces even for single-statement blocks to enhance code clarity and prevent errors when adding more statements later.

## Declare Variables Properly

- **Use `let` and `const`:** Prefer `let` for variables that change and `const` for variables that remain constant. Avoid `var` to prevent scope-related errors.

## Naming Conventions

- **Clear and Descriptive Names:** Choose variable and function names that clearly describe their purpose. Use camelCase for variables and functions, PascalCase for classes, and UPPER_CASE for constants.

## Functions

- **Small and Focused:** Write functions that do one thing and do it well. A function should ideally perform a single task or operation.
- **Arguments:** Limit the number of parameters for your functions. If a function requires many parameters, consider using an options object.

## Commenting and Documentation

- **Use Comments Wisely:** Comment your code to explain "why" something is done, rather than "what" is being done, which should be apparent from the code itself.
- **Documentation:** For larger projects, consider using JSDoc or similar tools for generating documentation from your code comments.

## Error Handling

- **Use `try...catch` Wisely:** Wrap error-prone code blocks with `try...catch` to gracefully handle potential errors and prevent them from crashing your application.
- **Custom Error Messages:** Provide clear and helpful error messages when throwing errors.

## Use ESLint

- **Linting:** Use ESLint in your projects to automatically catch syntax errors, enforce coding standards, and prevent common mistakes. ESLint can be configured to follow specific rules aligned with your project's coding standards.
- **Integrate with Your Editor:** Most code editors have plugins or integrations with ESLint, allowing you to see linting errors and warnings in real-time as you code.

## Keep Learning and Refactoring

- **Continuous Learning:** JavaScript and its ecosystem evolve rapidly. Keep learning new patterns, features, and best practices.
- **Refactor Regularly:** Refactor your code to improve its structure, readability, and performance as you gain more knowledge and experience.
