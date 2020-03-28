const rl = require('readline').createInterface(process.stdin, process.stdout);

const solution = (N) => {
  const binary = N.toString(2);
  const li = [0];

  for (let i = 0; i < binary.length; i += 1) {
    if (binary[i] === '1') {
      let gap = 0;
      for (let j = i + 1; j < binary.length; j += 1) {
        if (binary[j] === '0') {
          gap += 1;
        } else {
          li.push(gap);
          break;
        }
      }
      gap = 0;
    }
  }
  const max = li.reduce((a, b) => (a > b ? a : b));
  console.log(max);
};

rl.on('line', (line) => {
  solution(Number(line.split(' ')));
  rl.close();
});
