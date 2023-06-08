// Coding Problem 2

// What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class

//Call back hell is when numerous if statements or functions are nested within each other. You can determine if it is a callback hell if the piece of code looks like a pyramid. We should avoid callback hell because it makes reading the piece of code confusing and difficult to manage

fs.readFile("./txt/readthisfile.txt", "utf-8", (err, data1) => {
  if (err) return console.log("error!!");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has been written");
      });
    });
  });
});

console.log("will read file!");
