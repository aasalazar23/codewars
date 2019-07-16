function addBinary(a,b) {
    let c = a + b;
    // https://www.w3schools.com/jsref/jsref_tostring_number.asp
      //.toString(radix) - radix, base for numberic value 2 - binary, 8 - octal, 16 - hexadecimal
    return c.toString(2);
  }

console.log(addBinary(2,6));