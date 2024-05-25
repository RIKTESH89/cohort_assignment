// ## File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("aa.txt", "utf-8", function (err, data) {
  let str = data.replace(/\s+/g, " ").trim();
  fs.writeFile("aa.txt", str, function (err, data1) {
    console.log("done!");
  });
});
