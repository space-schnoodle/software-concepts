# JavaScript Concepts

- Weekly type language.
- No explicit type assignment.
- Data types can be switched dynamically.
- Data can be organized in logical objects.
- Primitive and reference types.
- Versatile language.
- You can mix different types in an array.
- Object-oriented languaje
- Runs in browser and directly on a PC/server

## JavaScript types

### Primitive Types

Some of JavaScript primitive types are:

- string
- number
- boolean
- undefined
- null

## JavaScript Variables

- **let** variables cannot be defined again, for instance, this will throw and error:

  ```js
  let song = "char";
  let song = "somebody else";
  ```

  the error is: identifier song has already being declared.

- The first character of a variable cannot be a number. It can be a letter of these special characters **$** and **\_**.
- Variables name can't be reserved keywords.

## JavaScript Operators

Equal operator `===`  
Non equal operator `!==`  
Less than operator `<`  
More than operator `>`  
Less than or equal to operator `<=`  
More than or equal to operator `>=`

### Logical operators

And operator `&&`  
Or operator `||`

## What is callback hell

- Is an anti-pattern seen in code of asyncronous programming.
- Lots of nested functions.

## What is a promise

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved.

### States

- Fulfilled
- Rejected
- Pending

## Questions

### What is the difference between == and === ?

== equals

- Test for abstract equality
- Does not tests for data type

and

=== strict equals

- Test for strict equality
- Does tests for data type
