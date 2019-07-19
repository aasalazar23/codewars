/**
 * Write a function that takes in a string of one or more words,
 * and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
 * Strings passed in will consist of only letters and spaces.
 * Spaces will be included only when more than one word is present.
 */

 function spinWords(w) {
   //TODO Have fun :)
   const flip = (word) => {
     if (word.length >= 5) {
             //.split returns an array
     return word.split("").reverse().join("");
     }
     return word;
   }
   let string = [];
   w.split(" ").forEach((word) => string.push(flip(word)));
   return string.join(' ');
 }

 console.log(spinWords("You are almost to the last test"));

 // when should you use map vs forEach?
 function spinWordsBest(words) {
   return words
     .split(" ")
     .map(function(word) {
       return word.length > 4
         ? word
             .split("")
             .reverse()
             .join("")
         : word;
     })
     .join(" ");
 }