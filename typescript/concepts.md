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

  ### Type inference

  Typescript tries to figure out what type of value a variable refers to.
  If declaration and initialization are on the same line, Typescript will figure out the type of the variable for us.

  #### The any type

  - A type, just as string or boolean are
  - Means TS has no idea what it is - can't check for correct property references
  - Avoid variables with any at all costs
