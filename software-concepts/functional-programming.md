# Functional Programming

Is the process of building software by composing pure functions, avoiding shared state, mutable data and side effects.

## Pure functions

This is a pure function:

```js
function add(a, b) {
  const total = a + b;
  return total;
}

console.log(add(1, 3));
```

- No external dependencies
- Not changing any state
- When you call it you always get the sa,e result for the same inputs
- Everything happens inside a function
- want to avoid unexpected side effects

### Impure function

Changing what happens on the screen
Example:

```js
function add(a, b) {
  const total = a + b;
  console.log(add(1, 3));
}
```
