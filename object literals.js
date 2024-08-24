// Objects are real world data and they work in key-value pair, key is like index in array and key-value have : in between and these key-value pairs seprated by ,
// key's naming conventions is similar to variable's naming convention.
//value can have anything like strings, numbers, boolean , array and objects as well 😄

const obj = {
  name: "Sandeep",
  age: 22,
  city: "Alwar",
  age: 78, // duplicate keys will be overwritten

  arr: [1, 2, 3, 4],
  obj: { hello: "hello" },
};
// getting data (. notation)
console.log(obj.age); // 78

// setting data
obj.age = 24;

console.log(obj);

// we can store strings in keys for spaces
const obj2 = { "my address": "cool house, 17 street" };
// geting data with [] notation
console.log(obj2["my address"]);

// getting data with the help of other variable
const add = "my address";
console.log(obj2[add]);

// settign data in . way
obj.email = "sandeep@gmail.com";

// settign data in [] way
obj["address"] = "cool house, 17 street";

// settign data in [] way with variables
const x = "email";
const y = "sandeep@gmail.com";
obj2[x] = y;

console.log(obj, obj2);

// getting items inside objects
console.log(obj);
console.log(obj.arr[3]); // 4
console.log(obj.obj.hello); // "Hello"

// loops in object
for (let key in obj) {
  console.log(`key is ${key} and value is ${obj[key]}`);
}

// Coping objects with Spread Operator (...)
const tinyObj1 = { key1: "val1", key2: "val2" };
const tinyObj2 = { key5: "val5", key6: "val6", key2: "val24" };

const bigObj = {
  ...tinyObj1, // key1: "val1", key2: "val2"
  ...tinyObj2, // key5: "val5", key6: "val6", key2: "val24"
  ..."Sandeep", // 0:"S" , 1:"a" , 2:"n" , 3:"d"
  ...[34, 35], // 0:34 , 1 : 35
  key57: "val57",
};
console.log(bigObj);

// Object inside Array (real World ex. [{}, {}, {}])
const users = [
  {
    id: 1,
    name: "Sandeep",
    age: 28,
  },
  {
    id: 2,
    name: "Manpreet",
    age: 20,
  },
  {
    id: 3,
    name: "Tanpreet",
    age: 12,
  },
];

for (const user of users) {
  console.log(user.name);
}
