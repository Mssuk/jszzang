const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  console.log(line.split(' ').reduce((a, b) => Number(a) + Number(b)));
  console.log(line.split(' ').reduce((a, b) => a - b));
  console.log(line.split(' ').reduce((a, b) => a * b));
  console.log(line.split(' ').reduce((a, b) => Math.floor(a / b)));
  console.log(line.split(' ').reduce((a, b) => a % b));
  rl.close();
});
