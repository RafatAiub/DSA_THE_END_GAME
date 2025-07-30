//Given two arrays, merge them and remove duplicates.
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

const mergedArray = [...arr1, ...arr2]; // Merging the two arrays
const uniqueArray = [...new Set(mergedArray)]; // Removing duplicates by converting to a Set and back to an array

console.log(uniqueArray); // Output: [1, 2, 3, 4]

// another process to remove duplicates
const merged = arr1.concat(arr2); // Merging the two arrays
const unique = merged.filter((item, index) => merged.indexOf(item) === index); // Filtering out duplicates
console.log(unique); // Output: [1, 2, 3, 4]

const mergeUnique = (a, b) => {
  const result = [];
  for (let item of a.concat(b)) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(mergeUnique(arr1, arr2)); // Output: [1, 2, 3, 4]
const uniqueSorted = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
console.log(uniqueSorted); // Output: [1, 2, 3, 4]

const intersection = arr1.filter((x) => arr2.includes(x));
console.log(intersection); // Output: [2, 3]
const difference = arr1
  .filter((x) => !arr2.includes(x))
  .concat(arr2.filter((x) => !arr1.includes(x)));
console.log(difference); // Output: [1, 4]

// Function to merge two arrays and remove duplicates
console.log("Now merge the intersection and difference of two arrays");
console.log([...intersection, ...difference].sort((a, b) => a - b)); // Output: [1, 2, 3, 4]
