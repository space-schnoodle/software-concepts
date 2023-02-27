# Typescript

- Extends js, is a superset of JS.
- Typescript needs to be compiled into JS.
- Typescript = JavaScript + a type system

## The TS Type System

- Helps us catch errors during development
- Uses 'type annotations' to analize our code
- Only active during development
- Doesn't provide any performance optimization

## Types

Easy way to refer to the different properties and functions that a value has.  
In the world of typescript we have to categories of types

- _primitive types_:
  - number
  - boolean
  - void
  - undefined
  - string
  - symbol
  - null
- _object types_:

  - functions
  - arrays
  - classes
  - objects

  ### Type annotations

  Code we add to tell Typescript what type of value a variable will refer to

  #### Type inference

  Typescript tries to figure out what type of value a variable refers to.
  If declaration and initialization are on the same line, Typescript will figure out the type of the variable for us.

  #### The any type

  - A type, just as string or boolean are
  - Means TS has no idea what it is - can't check for correct property references
  - Avoid variables with any at all costs

#### Type annotations for functions

Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

#### Type inference for functions

Typescript tries to figure out what type of value will return

#### When to use annotations in variables

- Function that returns the 'any' type
- When we declare a variable on one line and initialize it later
- When we want a variable to have a type that can't be inferred

## Arrays

Why typed arrays?

- TS can do type inference when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with map, forEach, reduce functions
- Flexible - arrays can still contain multiple types

## Tuple

Array-like structure where each element represents some property of a record.  
When working with tuples we have a fixed order.

## Interfaces

Creates a new type, describing the property names and value types of an object.

## General strategy for reusable code in TS

- Create functions that accept arguments that are typed with interfaces.
- Objects/classes can decide to 'implement' a given interface to work with a function.
