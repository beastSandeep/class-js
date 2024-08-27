function reverseNum(num) {
  const str = String(num);
  const arr = str.split("");
  const length = arr.length;

  const reverseArr = [];

  for (let i = 0; i < length; i++) {
    const element = arr.pop();
    reverseArr.push(element);
  }

  const reverseStr = reverseArr.join("");

  return Number(reverseStr);
}

console.log(reverseNum(1234)); // 4321
