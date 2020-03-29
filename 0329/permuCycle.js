const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

const dfs = (x, visited, adj) => {
  let stc = [x];
  while (stc.length !== 0) {
    const v = stc.pop();
    if (visited[v] === false) {
      visited[v] = true;
      stc = [...stc, ...adj[v]];
    }
  }
};

const solution = () => {
  const [cnt] = input;
  for (let i = 0; i < cnt; i += 1) {
    input.shift();
    const [n] = input.map((x) => parseInt(x, 10));
    input.shift();
    const [li] = input;
    const visited = new Array(n + 1).fill(false);
    const adj = new Array(n + 1).fill().map(() => []);
    const lis = li.split(' ');
    for (let j = 0; j < n; j += 1) {
      adj[j + 1].push(lis[j]);
      adj[lis[j]].push(j + 1);
    }
    let count = 0;
    for (let k = 1; k <= n; k += 1) {
      if (visited[k] === false) {
        dfs(k, visited, adj);
        count += 1;
      }
    }
    console.log(count);
  }
};

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution();
});
