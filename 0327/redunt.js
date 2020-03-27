const lr = require('readline').createInterface(process.stdin, process.stdout);

const li = [];
lr.on('line', (line) => {
  li.push(...line.split(' ').map((e) => Number(e)));

  const [a, b, c] = [li[0], li[1], li[2]];

  console.log(
    [
      (a + b) % c,
      ((a % c) + (b % c)) % c,
      (a * b) % c,
      ((a % c) * (b % c)) % c,
    ].join('\n')
  );
  lr.close();
});
