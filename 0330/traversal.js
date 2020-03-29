class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const preorder = (root) => {
  if (root) {
    process.stdout.write(root.value);
    preorder(root.left);
    preorder(root.right);
  }
};

const inorder = (root) => {
  if (root) {
    inorder(root.left);
    process.stdout.write(root.value);
    inorder(root.right);
  }
};

const postorder = (root) => {
  if (root) {
    postorder(root.left);
    postorder(root.right);
    process.stdout.write(root.value);
  }
};

const s = [];
const solution = () => {
  let [n] = s;
  s.shift();
  n = Number(n);
  const tree = new Array(n).fill().map(() => new Node());
  for (let i = 0; i < n; i += 1) {
    const node = s[i].split(' ');
    const [v, l, r] = node;
    tree[v.charCodeAt(0) - 'A'.charCodeAt(0)].value = v;
    if (l !== '.') {
      tree[v.charCodeAt(0) - 'A'.charCodeAt(0)].left =
        tree[l.charCodeAt(0) - 'A'.charCodeAt(0)];
    }
    if (r !== '.') {
      tree[v.charCodeAt(0) - 'A'.charCodeAt(0)].right =
        tree[r.charCodeAt(0) - 'A'.charCodeAt(0)];
    }
  }
  preorder(tree[0]);
  console.log();
  inorder(tree[0]);
  console.log();
  postorder(tree[0]);
  console.log();
};

const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  s.push(line);
}).on('close', () => {
  solution();
});
