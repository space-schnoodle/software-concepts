# React

Based on udemy course: https://www.udemy.com/course/react-redux/

A simple example app to see how state works from parant to child.

## Converting HTML to JSX

- All prop names follow camelCase
- Number attributes use cursy braces
- Boolean 'true' can be written with just the property name. 'false' should be written with curly braces.
- The 'class' attribute is written as 'className'
- In JSX, in-line styles are provided as objects

### Notes

- Default exports can be renamed in the importing file!

#### Named Exports Statements

- Use when exporting multiple variables
- Can have as many named exports as we want
- Two ways to write a named export
- Named exports can't be renamed

#### Props System

- Pass data from parent to child
- Allows parent to configure each child differently (show different styles, text, etc)
- One way flow data. Child can't push props back up
- Understanding the props system is like 25% of understanding React
