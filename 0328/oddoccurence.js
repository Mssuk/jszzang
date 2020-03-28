const li = [9, 3, 9, 3, 9, 7, 9];
const dic = {};
li.forEach((x) => {
  if (dic[x] === undefined) {
    dic[x] = 1;
  } else {
    dic[x] += 1;
  }
});
const kiss = Object.keys(dic);
const dap = kiss.filter((key) => dic[key] % 2 !== 0);
console.log(...dap);
