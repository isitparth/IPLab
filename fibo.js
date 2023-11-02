const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

rl.question("Enter the number of Fibonacci numbers to generate: ", (userInput) => {
  const n = parseInt(userInput);

  if (!isNaN(n) && n >= 0) {
    const fibonacciNumbers = fibonacciIterative(n);
    console.log(`First ${n} Fibonacci numbers:`);
    console.log(fibonacciNumbers.join(', '));
  } else {
    console.log("Please enter a valid non-negative number.");
  }

  rl.close();
});
