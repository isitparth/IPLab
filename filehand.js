const fs = require('fs');

// Data to write to the file
const content = 'This is the content to write to the file.';

// File path
const filePath = 'output.txt';

// Write to a file asynchronously
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log(`Data has been written to ${filePath}`);
});

/*
const fs = require('fs');

// File path to read
const filePath = 'example.txt';

// Read a file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File content:', data);
});
*/