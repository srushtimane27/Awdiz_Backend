// console.log("HELLO bshdgdgg a")

// Express


// 1. Read Text From File
// import fs from 'fs';
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



// 2. To Write Into The File

// const content = 'Hello';
// // Create a new file and write content to it
// fs.writeFile('awdiz.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File created and content written successfully.');
//   }
// });



import os from 'os'

console.log('Platform:-', os.platform())
// console.log('Relese: ' , os.release())
// console.log('Hostname:-', os.hostname())
// console.log('CPUs', os.cpus())
// console.log('Total Memory:-', os.totalmem())
// console.log('Free Memory:-', os.freemem())
// console.log('Network interfaces: ', os.networkInterfaces())
// console.log('Constants', os.constants)





/* Events module: Emitting Events */

// import EventEmitter from 'events';

// const myEmitter = new EventEmitter();  

// function greeting(){
//     console.log("Hello From Awdiz")
// }

// myEmitter.on("Awdiz", greeting)
// myEmitter.emit('Awdiz')

// function callForPresent(){
//     console.log("Call to present students")
// }

// myEmitter.on("Absent", callForPresent)
// myEmitter.emit('Absent')




// http Module

// import http from 'http';

// const books = ["ABC", "XYZ", "PQR"];

// const server = http.createServer((req, res) => {
//     if (req.method === "GET" && req.url === "/api/books") {
//       res.end(JSON.stringify(books))
//     } else if (req.method === "GET" && req.url === "/api/awdiz") {
//       res.end("Hi from awdiz")
//     } else if (req.method ==="GET" && req.url === "/api/srushti") {
//         res.end("HELLO EVERYONE")
//     }else {
//       res.end("Method or url not found..")
//     }
//   })
  
//   server.listen(8000, () => {
//     console.log("Server is running on port 8000")
//   })
  



