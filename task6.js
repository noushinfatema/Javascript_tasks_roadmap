// Check for Palindrome

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}
console.log("Palindrome Check : ", isPalindrome("racecar"));