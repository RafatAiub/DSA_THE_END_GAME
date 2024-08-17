const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel(sentence) {
  let count = 0;
  const letters = Array.from(sentence); // convert sentence into iterable array
  letters.forEach(function (value, i, arr) {
    // console.log(value);
    console.log(value, i, arr);
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(countVowel("my name is rafat"));
