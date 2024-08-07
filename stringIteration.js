// const string = "Hello My Name is Sandeep";

// let index = 0;

// while (index < string.length) {
//   console.log(string[index]);
//   index = index + 1;
// }

const arr = ["guddu bhaiya", 307, "kaleen bhaiya", 208, "munna bhaiya", 102];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    const el = arr[i];
    for (let strIn = 0; strIn < el.length; strIn++) {
      console.log(el[strIn]);
    }
  } else {
    console.log(arr[i]);
  }
}
