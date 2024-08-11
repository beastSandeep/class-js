// function declaration
function shopping() {
  console.log("shopping started");
  console.log("shopping done");
}

// running / invoking a function
shopping();

// when a function retruns something, we can store that thing while running a function and putting inside a variable.
function twoPlusFour() {
  let a = 2;
  let b = 4;
  return a + b;
}

let six = twoPlusFour();
console.log(six);

// we can accept data from outside
// a, b are function parameters
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
function c(a) {
  console.log(a);
}

// we can consume func. inside func.
// add(10, 20) is equals to 30
// c(30)
// first insided fucn. run then outer func. run
// 10 and 20 are function argument
c(add(10, 20));
c(mult(10, 20));
c(div(10, 20));
c(sub(10, 20));

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

const array = [1, 2, 3, 4, 5];
c(addArr(array));

function isEven(num) {
  // if (num % 2 === 0) {
  //   //return true if given number is even
  //   return true;
  // } else {
  //   //return false if given number is odd
  //   return false;
  // }

  return num % 2 === 0;
}

c(isEven(8)); // false

function findFristCharater(str) {
  const firstChar = str[0];
  return firstChar;
}

//return meanning findFristCharater("Sandeep") = str[0]

findFristCharater("Sandeep"); // S
findFristCharater("Arsh"); // A
findFristCharater("Manni"); // M
findFristCharater("Tanpreet"); // T

c(findFristCharater("Sandeep"));

// Task :-> we have to find a number is given array
//and if it's present we can return their index otherwise return -1
function findTarget(array, target) {
  // i is index
  for (const i in array) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

c(findTarget([1, 3, 5, 6, 8, 9], 5)); // 2
c(findTarget([1, 3, 5, 6, 8, 9], 9)); // 5
c(findTarget([1, 3, 5, 6, 8, 9], 10)); // -1

// We can write function in another ways also

// 1. Function Declaration (basic)
function fucnName(param) {
  //code
}

// 2. Function Expression
const fucnName = function (param) {
  //code
};

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

const camelCase = toCamelCase("hello kya hal hai"); // helloKyaHalHai
console.log(camelCase);

console.log(
  toCamelCase(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  )
);
