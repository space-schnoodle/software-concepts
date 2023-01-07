# Big Ο

Big O notation, sometimes also called “asymptotic analysis”, primarily looks at how many operations a sorting algorithm takes to completely sort a very large collection of data. This is a measure of efficiency and is how you can directly compare one algorithm to another.

_Some points_

- The best case is represented with greek letter omega: Ω
- The average case is represented by greek letter teta: Θ
- Big O is always wrost case, and it is represented by greek letter omicron Ο

_Example of best case_

```js
function addItems(n) {
  return n + n; // one operation
}
```

This has complexity O(1), the best case we can have.

## Some Graphs

![Big-O Complexity Chart](/resources/bigo_1.png "Big-O Complexity Chart").

## Sources

- https://www.freecodecamp.org/news/all-you-need-to-know-about-big-o-notation-to-crack-your-next-coding-interview-9d575e7eec4/
- Course: https://www.udemy.com/course/data-structures-algorithms-javascript/
- https://www.bigocheatsheet.com/
