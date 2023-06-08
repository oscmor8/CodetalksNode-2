// Coding Problem 3

// The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.

// In JS the keyword this is used to interact with objects. It is used to access and manipulate an objects properties and methods.

const obj = {
  name: "oscar",
  weight: 181,
  regularFunc: function () {
    console.log(`I am ${this.name} and i weigh ${this.weight}`);
  },
  arrowFunc: () => {
    console.log(`I am ${this.name} and i weigh ${this.weight}`);
  },
};

obj.regularFunc(); // Regular functions have their own this value, which changes depending on how they are called.
obj.arrowFunc(); // Arrow functions, on the other hand, don't have their own this value. Instead, they use the this value from the surrounding code, the place where the arrow function is written. They inherit the this value from the parent scope.
