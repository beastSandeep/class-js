function encoder(string) {
  let encodedString = "";

  for (let i = 0; i < string.length; i++) {
    let letterCode = string.charCodeAt(i); // letterCode = number
    let encodedletterCode = letterCode * 2 + 10;
    let encodedLetter = String.fromCharCode(encodedletterCode);
    encodedString = encodedString + encodedLetter;
  }

  return encodedString;
}

function decoder(string) {
  let decodedString = "";

  for (let i = 0; i < string.length; i++) {
    let letterCode = string.charCodeAt(i); // letterCode = number
    let decodedletterCode = (letterCode - 10) / 2;
    let decodedLetter = String.fromCharCode(decodedletterCode);
    decodedString = decodedString + decodedLetter;
  }

  return decodedString;
}

const encodedMessage = encoder("Hello");

const decodedMessage = decoder(encodedMessage);

console.log(encodedMessage);
