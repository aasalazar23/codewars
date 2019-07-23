/**
 * Given two strings s1 and s2, we want to visualize how different the two strings are.
 * The task is to produce a string in which each lowercase letters of s1 or s2 appears as
 * many times as its maximum if this maximum is strictly greater than 1; these letters will
 *  be prefixed by the number of the string where they appear with their maximum value and :.
 *  If the maximum is in s1 as well as in s2 the prefix is =:.
 * 
 * https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
 */

 function mix(s1, s2) {
   const s_1 = s1.match(/[a-z]/g);
   const s_2 = s2.match(/[a-z]/g);
   const stringSet = new Set(s_1.concat(s_2));
   const s1Dict = {};
   const s2Dict = {};

   let charCount = (string, sDict) => {
     for (let char of stringSet) {
       let regex = new RegExp(char, "g");
       let count = string.match(regex);
       if (count) {
          sDict[char] = count.join('');
        } else {
          sDict[char] = '.'; // keeps char in dictionary for comparison. can't use numbers later. .length cannot work on numbers
        }
      };
       //let num = string.match(/[char]/g);  // regex cannot accept a variable
    }
  charCount(s1, s1Dict);
  charCount(s2, s2Dict);


   let compArray = [];
   let compareDicts = (dict1, dict2) => {
     for (char of stringSet) {
       let d1length = dict1[char].length;
       let d2length = dict2[char].length;
       if (d1length > 1 || d2length > 1) {
         if (d1length == d2length) {
          compArray.push(`=:${dict1[char]}`);
         } else if (d1length > d2length) {
           compArray.push(`1:${dict1[char]}`);
         } else if (d2length > d1length) {
           compArray.push(`2:${dict2[char]}`);
         } else {
           continue;
         }
       }
     }
   }


   compareDicts(s1Dict, s2Dict);
   let sortedCompArray = compArray.sort((a, b) => {
     return b.length - a.length || a.localeCompare(b); // sorts by length first, then alphabetically
   });
   
   return  (sortedCompArray.join('/'));

 }

console.log(mix("A generation must confront the looming ", "codewarrs"));
