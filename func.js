const fs = require("fs");
fs.writeFile("TestDocument.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
