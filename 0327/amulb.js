const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  console.log(line.split(' ').reduce((a, b) => a / b));
  rl.close();
});
