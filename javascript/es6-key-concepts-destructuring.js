//Destructuring: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or //properties from objects, into distinct variables.

// Example 1: Objects

// Given an object with my favorite League of legends Champions for each position, get the adc and support.
const leagueFaveChampions = {
  jungle: "Graves",
  top: "Riven",
  mid: "Akali",
  adc: "Heimerdinger",
  support: "Rakan",
};

/* Before to get for example the adc you did something like this:
  const adc = leagueFaveChampions.adc;
  const support = leagueFaveChampions.support;
  */

// With destructuring you do
const { adc, support } = leagueFaveChampions;

// Example 2: Array
// You can also do destructuring of array.

// Given array of my favorite supports, get the fisrt and the third of the array using destructuring.
const faveSupports = ["Rakan", "Karma", "Janna", "Sona", "Soraka", "Nautilus"];

// You can add and extra comma to skip the second value and get the third one.
// The comma separator is used to skip values in an array.
const [thefirst, , third] = faveSupports;
console.log(thefirst, third);

// Example 3: Desrtructuring in a function

// Given my favorite champs to play in Aram, list them.
const aram = {
  spanishName: "Abismo de los lamentos",
  champions: ["Heimerdinger", "Udyr", "Janna", "Ziggs"],
};

function aramChamps({ champions }) {
  console.log(`I'd probably win in Aram if I play with: ${champions}`);
}

aramChamps(aram);

// Example 4

// Given an array of other league of legends champs I like, skip the first one and print the rest.
const otherChamps = ["Garen", "Lucian", "Nocturne", "Morgana", "Zyra"];
const [first, ...others] = otherChamps;
console.log("Other champs I like: ", others);
