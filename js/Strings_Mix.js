/**
 * Given two strings s1 and s2, we want to visualize how different the two strings are.
 * The task is to produce a string in which each lowercase letters of s1 or s2 appears as
 * many times as its maximum if this maximum is strictly greater than 1; these letters will
 *  be prefixed by the number of the string where they appear with their maximum value and :.
 *  If the maximum is in s1 as well as in s2 the prefix is =:.
 */

 function mix(s1, s2) {
   const s_1 = s1.match(/[a-z]/g);
   const s_2 = s2.match(/[a-z]/g);
   const stringSet = new Set(s_1.concat(s_2));
   const s1Dict = {};
   const s2Dict = {};

   let charCount = (string, num, sDict) => {
     for (let char of stringSet) {
       let regex = new RegExp(char, "g");
       let count = string.match(regex);
       if (count) {
         count.join();
          if (count.length > 1) {
            sDict[char] = num + count;
          }
       };
       //let num = string.match(/[char]/g);  // regex cannot accept a variable
      }
     }
  charCount(s1, "1:", s1Dict);
   charCount(s2, "2:", s2Dict);
   console.log(s1Dict, s2Dict);
 }

mix("Are they here", "yes, they are here");
