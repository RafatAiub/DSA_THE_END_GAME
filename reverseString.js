const str = "Apple";

// 1.convert string to array 2.reverse that array 3.finally convert array to string

const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString(str));

// Now test if it is palindrome or not

function isPalindrome(str) {
  //here I use the reverseString function which already created
  const reverseStr = reverseString(str);
  if (str == reverseStr) {
    console.log("this string is a palindrome");
    return true;
  } else {
    console.log("this string is not a palindrome");
    return false;
  }
}

// here I write a arrow function which return true/false
const palindrome = (str) => str.split("").reverse().join("") === str;

//arrow function test
console.log(palindrome("rafat")); // return false
console.log(palindrome("1234321")); // return true
