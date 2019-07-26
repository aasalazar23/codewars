/**
 * Greed is a dice game played with five six-sided dice.
 * Your mission, should you choose to accept it,
 * is to score a throw according to these rules.
 * You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll.
For example, a "5" can only count as part of a triplet (contributing to the 500 points)
or as a single 50 points, but not both in the same roll.
 */

 function score(dice) {
   const scores = {
     ones: 1000,
     sixes: 600,
     fives: 500,
     fours: 400,
     threes: 300,
     twos: 200,
     one: 100,
     five: 50
   };
   const countThree = (num) => {
     console.log(num, dice.filter(d => d == num).length);
   }
   const nums = new Set(dice);
   nums.forEach((num) => countThree(num));
 }

 score( [2, 3, 4, 6, 2]);

 function score(dice) {
   var dc = [0, 0, 0, 0, 0, 0]; // die options
   var tdr = [1000, 200, 300, 400, 500, 600]; // points assigned by position for triples
   var sdr = [100, 0, 0, 0, 50, 0]; // points for single values
   dice.forEach(function(x) {
     dc[x - 1]++; // if 1 given, dc[1 -1] references 0 position on array, transposes dice numbers onto array positions
      // ++ adds one to that position, creating a counting mechanism
   });
   return dc.reduce(function(s, x, i) { //s is the accumulator (Score), x is current, i is index
     return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
        // each iteration, score increased by value if 
                // x >= 3. checks for triple
                    // if true, returns value of tdr array at that index
                          //if false returns 0, no points
                                        // + single dice roll index * the remainder of x % 3, 
   }, 0);
 }