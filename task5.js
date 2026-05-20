// Remove Duplicates from Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Array without duplicate value : ", removeDuplicates([11,23,7,23,11,9,0,0,7,11]));