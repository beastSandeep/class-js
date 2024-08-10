// we can print three message as their indivisual functions

// 1. happy birthday
const singHappyBirthDay = () => {
  console.log("Happy BirthDay to chinu");
};
singHappyBirthDay();

// 2. Hating
const spreadHate = () => {
  console.log("I Hate You");
};
spreadHate();

// 2. I L U
const iLY = () => {
  console.log("I Love You");
};
iLY();

// equals to

const say = (mesasge) => {
  console.log(mesasge);
};

const a = (any) => {
  alert(any);
};

a("Hello");

const p = (any) => {
  return prompt(any);
};

a(p("How are you"));

const somthing = say("Happy BirthDay to chinu");
console.log(somthing); // undefined (nothing returning)
say("I Hate You");
say("I Love You");
