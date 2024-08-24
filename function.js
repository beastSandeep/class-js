// ---------------------------- Day - 1 -------------------------

// function declaration
function shopping() {
  console.log("shopping started");
  console.log("shopping done");
}

// running / invoking / call a function
shopping();

// a and b are function parameters
function addTwo(a, b) {
  a++;
  console.log(a + b);
}

// 5 and 12 are function arguments
addTwo(5, 10);

// when a function retruns something, we can store that thing while running a function and putting inside a variable.
function twoPlusFour() {
  let a = 2;
  let b = 4;
  return a + b;
}

let six = twoPlusFour();
console.log(six);

function add(a, b) {
  return a + b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function sub(a, b) {
  return a - b;
}
function cl(value) {
  console.log(value);
}

// we can consume func. inside func.
// add(10, 20) is equals to 30
// cl(30)
// first insided fucn. run then outer func. run

cl(add(10, 20));
cl(mult(10, 20));
cl(div(10, 20));
cl(sub(10, 20));

// Exercise - low level

function findFristCharater(str) {
  const firstChar = str[0];
  return firstChar;
}

findFristCharater("Sandeep"); // S
findFristCharater("Arsh"); // A
findFristCharater("Manni"); // M
findFristCharater("Tanpreet"); // T
cl(findFristCharater("Sandeep"));

// ---------------------------- Day - 2 -------------------------

function isEven(num) {
  return num % 2 === 0;
}

cl(isEven(8)); // true

function addArr(arr) {
  let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   const number = arr[i];
  //   sum = sum + number;
  // }
  for (const number of arr) {
    sum = sum + number; //  sum += number;
  }

  return sum;
}

cl(addArr([1, 2, 3, 4, 5, 6])); // 21

// Task :-> we have to find a number is given array
//and if it's present we can return their index otherwise return -1
function findTarget(array, target) {
  for (const index in array) {
    if (array[index] === target) {
      return index;
    }
  }

  return -1;
}

cl(findTarget([1, 3, 5, 6, 8, 9], 5)); // 2
cl(findTarget([1, 3, 5, 6, 8, 9], 9)); // 5
cl(findTarget([1, 3, 5, 6, 8, 9], 10)); // -1

// We can write function in another ways also

// 1. Function Declaration (basic)
function fucnName(param) {
  //code
}

// 2. Function Expression
// const fucnName = function (param) {
//   //code
// };

// 3. Arrow Function (most used)
const fucnName2 = (param) => {
  //code
};

const toCamelCase = (str) => {
  const arr = str.split(" ");
  const camelCased = [];
  for (const i in arr) {
    if (i == 0) {
      let word = arr[i].toLowerCase();
      camelCased.push(word);
    } else {
      const wordArr = arr[i].toLowerCase().split("");
      wordArr[0] = wordArr[0].toUpperCase();
      camelCased.push(wordArr.join(""));
    }
  }

  return camelCased.join("");
};

function ccl(str) {
  return toCamelCase(str);
}

const camelCase = toCamelCase("hello kya hal hai"); // helloKyaHalHai
console.log(camelCase);

console.log(toCamelCase("Lorem Ipsum is simply"));

const kuchBhi = ccl("kuch bhi likh do");
console.log(kuchBhi);
