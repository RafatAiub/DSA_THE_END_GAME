const arr = [12, 46, 98, 45, 78, 100, 65, 42, 14, 35];

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = arr.slice(index, index + size);
    console.log(`--------------${chunk}`);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};
console.log(chunk(arr,3))
const ArrayChunk = (arr, numOfChumk) => {
  let subArray = [];
  let arrOfArray = [];
  let count = 0;
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    subArray[j] = arr[i];
    if (j === numOfChumk - 1 || i === arr.length - 1) {
      arrOfArray[count] = subArray;
      count++;
      subArray = [];
      j = -1;
    }
  }
  return arrOfArray;
};

console.log(ArrayChunk(arr, 3));

