/**
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals,
 * and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
 */

 function sumIntervals(intervals) {
   let all = [];
   for (var i = 0; i < intervals.length; i++) {
     let start = intervals[i][0];
     let end = intervals[i][1];
     while (start < end) {
       all.push(start);
       start++;
     }
   } 
   let allSet = new Set(all);
   return allSet.size;
 }

 console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]));

 function sumIntervalsOther(intervals) {
   const ranges = new Set();

   intervals.forEach(([start, end]) => {
     for (let i = start; i < end; i++) ranges.add(i); //adds directly to set
   });

   return ranges.size;
 }