// Coding Problem 1

// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.

// A promise is a way to utilize async operations. It guarentees that the operation will either succeed and display a result or fail with an error. Think of it as a promise you make with your code to do a task and when its done return a result.
// Promises are used to write cleaner code by allowing you to deal with async operations in a organized way.
// The pros of promises include error handaling, avoiding callback hell, and readability

const fs = require("fs");
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error); // Promise rejected with the error from file read
      } else {
        resolve(data); // Promise fulfilled with the file content
      }
    });
  });
}
