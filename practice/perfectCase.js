function perfectCase(str) {
  // str = "the foX runs so fasT."
  const perectLowerCase = str.toLowerCase(); // the fox runs so fast.
  const words = perectLowerCase.split(" "); // ["the", "fox", "runs", "so", "fast."]
  const modifiedWords = []; // ["The", "Fox"]

  for (const word of words) {
    const letters = word.split(""); // ["t", "h", "e"]
    const fristLetter = letters.shift(); // "t"
    const fristLetterUpperCased = fristLetter.toUpperCase(); // "T"
    letters.unshift(fristLetterUpperCased); // ["T", "h", "e"]

    const modifiedWord = letters.join(""); // "The"

    modifiedWords.push(modifiedWord);
  }

  const perfectString = modifiedWords.join(" "); // "The Fox"

  return perfectString;
}

const x = perfectCase("the foX runs so fasT."); // The Fox Runs So Fast.
console.log(x);
