/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Implement a function that determines whether a string that contains only letters is an isogram. 
 * Assume the empty string is an isogram. Ignore letter case. 
 */

function isIsogram(str){
    // to match letters of all cases
    str = str.toLowerCase();
    let uniqueChar = [...new Set(str)];
    if (uniqueChar.length == str.length) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
  }

  isIsogram("isIsogram");