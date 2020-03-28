const input = [];

const dfs = (visit, adj, v) => {
  visit[v] = true;
  adj[v].forEach((x) => {
    if (visit[x] === false) {
      dfs(visit, adj, x);
    }
  });
};

const solution = () => {
  const [a] = input;
  const [n, m] = a.map((v) => parseInt(v, 10));
  const visited = new Array(n + 1).fill(false);
  const adj = new Array(n + 1).fill().map(() => []);
  let count = 0;
  for (let i = 1; i <= m; i += 1) {
    const [u, v] = input[i].map((x) => parseInt(x, 10));
    adj[u].push(v);
    adj[v].push(u);
  }

  for (let j = 1; j < n + 1; j += 1) {
    if (visited[j] === false) {
      dfs(visited, adj, j);
      count += 1;
    }
  }

  console.log(count);
};

const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  input.push(line.split(' '));
}).on('close', () => {
  solution();
});
