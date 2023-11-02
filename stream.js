const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, World!', 'utf8', () => {
  console.log('Data has been written to the file.');
});

writableStream.end();
