const net = require('net');

const users = [];

const server = net.createServer((socket) => {
  socket.setEncoding('utf-8');

  // Add a new user to the list when they connect
  users.push(socket);

  // Send a welcome message to the new user
  socket.write('Welcome to the User-Client server!\n');

  // Broadcast messages from one user to all others
  socket.on('data', (data) => {
    users.forEach((user) => {
      if (user !== socket) {
        user.write(`${socket.remoteAddress}:${socket.remotePort}: ${data}`);
      }
    });
  });

  // Remove the user from the list when they disconnect
  socket.on('end', () => {
    users.splice(users.indexOf(socket), 1);
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
