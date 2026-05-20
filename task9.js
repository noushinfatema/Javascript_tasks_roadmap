// Memoized Function Decorator

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    
    const key = JSON.stringify(args); // Using JSON.stringify so multi-arg calls get a reliable key
 
    if (cache.has(key)) {
      console.log(`[cache hit] key: ${key}`);
      return cache.get(key);
    } 
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
// Testing memoized factorial
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
 
const memoFactorial = memoize(factorial);
 
console.log("Task 09:", memoFactorial(5));  // 120 & computed
console.log("Task 09:", memoFactorial(5));  // 120 & from cache
console.log("Task 09:", memoFactorial(6));  // 720 & computed