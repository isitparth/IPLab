const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
  console.log('Connected to the server');

  // Handle user input from the command line
  process.stdin.on('data', (data) => {
    client.write(data);
  });
});

client.on('data', (data) => {
  process.stdout.write(data);
});

client.on('close', () => {
  console.log('Connection closed');
});
