const rl = require('readline').createInterface(process.stdin, process.stdout);

const li = [];

rl.on('line', (line) => {
  li.push(Number(line));
}).on('close', () => {
  const [a, b] = [li[0], li[1]];
  console.log(
    [
      a * (b % 10),
      a * Math.floor((b % 100) / 10),
      a * parseInt(b / 100, 10),
      a * b,
    ].join('\n')
  );
});
