// title case a sentence

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("The result : ", titleCase("i love coding"));