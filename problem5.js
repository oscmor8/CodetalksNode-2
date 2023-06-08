// What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.

// async/await is utilized to create async operation to act more like sync operations. This allows the code to become more readable. It is built utilizing promises and creates async operations to operate like sync operations. One pro of async/await is since it allows us to write async code to operate like sync operations, it allows us to operate the code in a sequential and linear matter. A con is that it relies on promises to handle asynchronous operations.

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Async function that performs multiple async operations using await
async function performOperations() {
  console.log("Starting operations...");

  await wait(2000); // Pause execution for 2 seconds
  console.log("First operation completed.");

  await wait(1500); // Pause execution for 1.5 seconds
  console.log("Second operation completed.");

  await wait(1000); // Pause execution for 1 second
  console.log("Third operation completed.");

  console.log("All operations completed!");
}

// Call the async function
performOperations();
