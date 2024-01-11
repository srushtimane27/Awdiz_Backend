// console.log("HELLO bshdgdgg a")

// Express
import fs from 'fs';

// 1. Read Text From File
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



// 2. To Write Into The File
const content = 'Hello';
// Create a new file and write content to it
fs.writeFile('awdiz.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File created and content written successfully.');
  }
});
