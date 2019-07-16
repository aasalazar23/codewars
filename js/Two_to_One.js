/**
 * Take 2 strings s1 and s2 including only letters from ato z. 
 * Return a new sorted string, the longest possible, containing distinct letters,
 * each taken only once - coming from s1 or s2.
 */

function longest(s1, s2) {
    // your code
    let s3 = [];
    
    let letterCheck = (s) => {
      for (letter of s) {
        if (s3.includes(letter)) {
          continue;
        } else {
          s3.push(letter);
        }
      }
    };
    letterCheck(s1);
    letterCheck(s2);

    return s3.sort().join('');
  }

  console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));


  // Best Practices 

  const longest_best = (s1, s2) => [...new Set(s1+s2)].sort().join('')
                                // ... is the spread operator, takes items of an iterable and produces a series of csv
                                // since a Set only allows for unique values, this solves the problem
                                // [] converts it into an array to use .sort() and .join('')