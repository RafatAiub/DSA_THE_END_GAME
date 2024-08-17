function reverseString(str) {
  console.log(str.length);

  let newStr = "";
  for(let i=str.length-1;i>=0 ;i--){
    newStr+= str[i];
  }

  return newStr;
}

const getName = reverseString("Hello")

console.log(getName)
