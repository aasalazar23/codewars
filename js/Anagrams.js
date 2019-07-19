/**
 * Write a function that will find all the anagrams of a word from a list.
 * You will be given two inputs a word and an array with words.
 * You should return an array of all the anagrams or an empty array if there are none.
 * For example:
 * anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
 * anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
 * anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
 */

// had to get help for this one
function anagrams(word, words) {
  // .filter on array returns an array of values that meet criteria
  return words.filter(w => {
    return (
      w
        .split("")
        .sort()
        .join("") ===
      word
        .split("")
        .sort()
        .join("")
    );
  });
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

let anagramsSimple = (word, words) =>
  words.filter(
    w =>
      w
        .split("")
        .sort()
        .join("") ===
      word
        .split("")
        .sort()
        .join("")
  );
