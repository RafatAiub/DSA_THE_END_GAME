function twoSum(nums, target) {
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
      // For each element, check every other element
      for (let j = i + 1; j < nums.length; j++) {
        // If the two elements add up to the target, return their indices
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    // If no solution is found (which shouldn't happen in this problem), return an empty array
    return [];
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSum(nums, target)); // Output: [0, 1]
  