/**
 * 
 * Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
 */

const MORSE_CODE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };

decodeMorse = function(morseCode){
  //your code here
  const morseArray = morseCode.trim().split(' ');
  const morseDecodedArray = [];

  morseArray.forEach(letter => {
    if (letter == '') {
      morseDecodedArray.push(' ');
      } else {
    morseDecodedArray.push(MORSE_CODE[letter]);
    }
  }
  );
  let morse = morseDecodedArray.join('');
  // split array produced '', '' to signify a space, need to replace it
  morse = morse.replace(/ +/g, ' ');
  return morse
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

decodeMorseBest = function(morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word
      .split(" ")
      .map(decodeMorseLetter)
      .join("");
  }
  return morseCode
    .trim()
    .split("   ") // double space indicating a word split
    .map(decodeMorseWord)
    .join(" ");
};