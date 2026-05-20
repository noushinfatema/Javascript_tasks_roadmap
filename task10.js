// Asynchronous Fetch Timeout Wrapper

function fetchWithTimeout(url, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request Timed Out"));
    }, ms);
  });

  return Promise.race([
    fetch(url),
    timeout
  ]);
}
// Testing
(async function () {
  try {
    const response = await fetchWithTimeout(
      "https://jsonplaceholder.typicode.com/todos/1",
      1
    );

    const data = await response.json();
    console.log("Success:", data);
  } catch (err) {
    console.log("Error:", err.message);
  }
})();