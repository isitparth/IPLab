// Creating a Buffer
const buffer1 = Buffer.from('Hello, World!', 'utf8'); // Create a buffer from a string
const buffer2 = Buffer.alloc(8); // Create an uninitialized buffer with a specified size

// Modifying a Buffer
buffer2.write('12345678', 'utf8'); // Write data to buffer2

// Concatenating Buffers
const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);

// Displaying the Buffer content
console.log('Buffer 1:', buffer1.toString());
console.log('Buffer 2:', buffer2.toString());
console.log('Concatenated Buffer:', concatenatedBuffer.toString());

// Reading from a Buffer
console.log('Read from buffer2:', buffer2.toString('utf8', 0, 5)); // Read the first 5 characters

// Comparing Buffers
const isEqual = buffer1.equals(buffer2);
console.log('Are buffer1 and buffer2 equal?', isEqual);
