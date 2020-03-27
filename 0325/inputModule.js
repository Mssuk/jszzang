const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  // input = line.split(' ').map((el) => parseInt(el, 10));
  input.push(line);
}).on('close', () => {
  console.log(input.join(' '));
  process.exit();
});
