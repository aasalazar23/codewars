/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 */



function validatePIN (pin) {
    //return true or false
                // \b - boundary, checks for only four or six digits in a single string.
                        // && pin.length ensures string has only 4 or 6 characters
    if((pin.match(/\b\d{4}\b/) && pin.length == 4) || (pin.match(/\b\d{6}\b/)) && pin.length == 6) {
        return true;
    } else {
        return false;
    }
  }

console.log(validatePIN('23455'));

  // best practices, regex using ^ beginning and $ end characters, and \d to validate digits
  function validatePIN_best(pin) {
      // .test is a method on a RegExp object, returns true or false
    return /^(\d{4}|\d{6})$/.test(pin)
  }