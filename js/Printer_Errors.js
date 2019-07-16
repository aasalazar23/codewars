/**In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z. */

function printerError(s) {
    // your code
    let errors = 0;
    
    let colorCheck = (letter) => {
      // REGEX searches n-z, .test returns boolean
      if(/[n-z]/.test(letter)) {
        errors+=1;
      }
    };
    
    for (letter of s) {
      colorCheck(letter);
    };
    
   return `${errors}/${s.length}`;  
}

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s));




// Best Practies
function printerError(s) {
    // /g means Global, counts all occurences not just the first match
    // ^ means characters not in range a-m
    return s.match(/[^a-m]/g).length + "/" + s.length;
}