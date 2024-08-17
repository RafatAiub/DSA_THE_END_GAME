const str = "Apple";

// 1.convert string to array 2.reverse that array 3.finally convert array to string

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString(str));
