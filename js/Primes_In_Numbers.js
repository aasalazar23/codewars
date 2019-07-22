/**
 * Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
 */

 function primeFactors(n) {
   let num = n;
   let primes = {
     2: 0,
     3: 0,
     5: 0,
     7: 0,
     11: 0,
     13: 0,
     17: 0,
     19: 0,
     23: 0,
     29: 0,
     31: 0,
     37: 0,
     41: 0,
     43: 0,
     47: 0,
     53: 0,
     59: 0,
     61: 0,
     67: 0,
     71: 0,
     73: 0,
     79: 0,
   };
   let primeString = '';
   let divisibleBy = (prime) => {
     let primeCount = 0;
     while (num%prime == 0) {
       primeCount++;
       num = num/prime;
     }
     return primes[prime] = primeCount;
   }
   for (prime in primes) {
     if (num > 0) {
       divisibleBy(prime);
     }
   }

   for (prime in primes) {
     if (primes[prime] == 0) {
       continue;
     } else if (primes[prime] == 1) {
       primeString += `(${prime.toString()})`
     } else {
       primeString += `(${prime.toString()}**${primes[prime].toString()})`;
     }
   }

   if (num > 1) {
     primeString += `(${num.toString()})`;
   }
   return primeString;
 }

 // had to check for answer, my function only worked for hard coded prime factors in a dictionary

 primeFactors(7775460);

 function primeFactorsBest(n) {
   for (var i = 2, res = "", f; i <= n; i++) {
     f = 0;
     while (n % i == 0) {
       f++;
       n /= i;
     }
     res += f ? "(" + (f > 1 ? i + "**" + f : i) + ")" : "";
   }
   return res || "(" + n + ")";
 }