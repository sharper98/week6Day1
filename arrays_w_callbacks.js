const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Every //
// 1.

const lessThanOrEqualTo0 = (currentValue) => currentValue >= 0;
console.log(nums.every(lessThanOrEqualTo0))

// 2.

const shorterThan8Chars = (currentWord) => currentWord.length < 8;
console.log(panagram.every(shorterThan8Chars));


// Filter //
// 1.

const lessThan4 = nums.filter((num) => num < 4);
console.log(lessThan4);

// 2.

const evenLength = panagram.filter((word) => word.length % 2 === 0)
console.log(evenLength);


// Find //
// 1.

console.log(nums.find((num) => num % 5 === 0));

// 2.

console.log(panagram.find((word) => word.length > 5));

// No words greater than 5, = undefined


// For Each //
// 1.

nums.forEach((num) => console.log(num*3));

// 2.

panagram.forEach((word) => console.log(`${word}!`));

// Map //
// 1.

const mappedNum = nums.map((num) => num * 100);
console.log(mappedNum);

// 2.

const mappedWords = panagram.map((word) => word.toUpperCase());
console.log(mappedWords);


// Some //
// 1. 

console.log(nums.some((num) => num % 7));

// 2. 

console.log(panagram.some((word) => word.includes('a')));


// Reduce //
// 1.

let initialValue = 0;
const sumWithInitial = nums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);

// 2. 

let concatenatedWords = '';
const concatenator = panagram.reduce((accumulator, currentValue) => accumulator + currentValue, concatenatedWords);
console.log(concatenator);

// Sort //
// 1.

console.log(nums.sort());

// 2.

console.log(panagram.sort());

// 3. & 4. //

console.log(nums.sort((a, b) => a-b));
console.log(nums.sort((a, b) => b-a));

// 5. & 6. //
console.log(panagram.sort((a, b) => a.toLowerCase()<b.toLowerCase() ? -1 : 1));
console.log(panagram.sort((a, b) => a.toLowerCase()>b.toLowerCase() ? -1 : 1));


// Working with data

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]