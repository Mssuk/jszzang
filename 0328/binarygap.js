const rl = require('readline').createInterface(process.stdin, process.stdout);

const solution = (N) => {
  const binary = N.toString(2);
  console.log(binary);
  const subs = binary.slice(1, binary.lastIndexOf('1'));
  console.log(subs);
  console.log(subs.split('1'));
  const maxy = subs.split('1').map((x) => x.length);
  console.log(...maxy);
  console.log(Math.max(...maxy));
};

rl.on('line', (line) => {
  solution(Number(line.split(' ')));
  rl.close();
});
