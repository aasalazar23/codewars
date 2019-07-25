/**
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.


 */

var maxSequence = function(arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min); // returns the lowest-valued number (sum or min)
    ans = Math.max(ans, sum - min); // returns the highest-valued number (ans, or sum - min)
  }
  return ans;
};

 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);