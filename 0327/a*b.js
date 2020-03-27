const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const dap = line.split(' ').reduce((a, b) => a * b);
  console.log(dap);
  rl.close();
});
