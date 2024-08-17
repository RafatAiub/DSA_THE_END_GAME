const students = ["rafat", "abid", "nuhan", "tamim", "xamil"];

console.log(students.sort()); // but it muted the main array

// for number the sort
const roll_numbers = [15, 4, 45, 12, 35];

console.log(
  roll_numbers.sort(function (a, b) {
    return a - b;
  })
);

const arr = [15, 4, 45, 12, 35, 15, 4, 12, 35];
// find duplicate from arr

const duplicates = arr.filter(function (currentValue, index, array) {
  return array.indexOf(currentValue) !== index; // indexOf(currentIndex) is the first index of the value
});

console.log(duplicates);
