const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let input = [];
// const main = () => {
//   const a = input[0];
//   const b = input[1];
//   console.log(a - b);
// };

rl.on('line', (line) => {
  // input = line.split(' ').map((el) => parseInt(el, 10));
  const dap = line.split(' ').reduce((a, b) => Number(a) - Number(b));
  console.log(dap);
  rl.close();
});
