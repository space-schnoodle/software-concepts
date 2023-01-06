# ES6 - Arrow Functions

## Example

```js
const numbers = [1, 2, 3]; // add one number to each array value

// we will use map fuction

const updatedNumbers = numbers.map((number) => {
  return (number += 1);
});

// If you return just one value, you can do an implicit return, delete the scope and the parentheses,
// like this:

const updatedNumbers = numbers.map((number) => (number += 1));
```

**=>** This symbol is called fat arrow.
