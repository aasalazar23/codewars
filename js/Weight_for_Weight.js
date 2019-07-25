/**
 * My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
 */

 function orderWeight(string) {
    // .map(Number) takes each element and maps Number onto them
   let nums = string.match(/\b\d+\b/g); // must leave as string to split
   let order = [];
   let sortedOrder = [];
   let sortedString = [];
   const convertWeight = (num) => {
    const splitNum = num.split('').map(Number);
    const add = (a,b) => a + b;
    const sum = splitNum.reduce(add); // .reduce((callback(accumulator, current value)))
    return sum;
   };

    /**
     * sort is a comparison function 
     *  (a,b) => {a-b}
     * if it returns less than 0, sort a before b
     *  a = 2 b = 3 (2 - 3) = -1, thus a comes before b
     * if it returns greater than 0, sort b before a
     * if it returns 0, leave a and b unchanged
     */
   nums.forEach((num) => {
     let convertedWeight = convertWeight(num);
     let weight = num;
     order.push([convertedWeight, weight]);
  });

  sortedOrder = order.sort((a,b) => a[0] - b[0]);
  sortedOrder.forEach(a => {
    sortedString.push(a[1]);
  });
  return sortedString.join(' ');
 }

 console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

 function orderWeight(strng) {
   // sum function eliminates the need of an extra array/obj to hold results
   const sum = str => str.split("").reduce((sum, el) => sum + +el, 0);
   function comp(a, b) {
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
     // localeCompare = returns num referencing if string comes before/after/or same in string order
      // string a compared to string b. if a before b, returns negative value
   }
   return strng
     .split(" ")
     .sort(comp)
     .join(" ");
 }