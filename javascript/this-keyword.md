# The `this` keyword

## What is the this keyword and how is used?

The `this` keyword refers to whatever object is directly inside it.

**Example with objects**

```js
var house = {
    price: 100000
    squareFeet: 2000
    getPriceBySquareFeet: function() {
        return this.proce / this.squareFeet;
    }
}

console.log(house.getPriceBySquareFeet()); //50
```
