const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.get('/login', (req, res) => {
  const loginForm = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Login Form</title>
    </head>
    <body>
      <h1>Login Form</h1>
      <form action="/login" method="POST">
        <div>
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" required>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </body>
    </html>
  `;

  res.send(loginForm);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // You can add your authentication logic here.
  // For simplicity, we'll compare the input values to a hardcoded user.
  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Login failed. Please check your credentials.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
