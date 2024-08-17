// the famous problem

const fizzBuzz = (n) => {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0) console.log("Fizz");
    if (i % 5 === 0) console.log("Buzz");
    if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
    else {
      console.log(i);
    }
  }
};

fizzBuzz(100);
