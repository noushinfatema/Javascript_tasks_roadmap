// Count Vowels

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log("The number of vowels : ", countVowels("randomnumbers"));