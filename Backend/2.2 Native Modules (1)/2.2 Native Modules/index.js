const fs = require("fs");

fs.writeFile("message.txt", "hi",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 