const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add authentication logic here
  if (username === 'user' && password === 'password') {
    res.send('Login successful');
  } else {
    res.send('Login failed');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});