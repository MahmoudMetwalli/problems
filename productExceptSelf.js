array = [1, 2, 3, 4, 5];
answer = new Array(5).fill(1);
let prefix_num = 1;

for (let i = 0; i < array.length; i++) {
  answer[i] = prefix_num;
  prefix_num = prefix_num * array[i];
}

let suffix_num = 1;

for (let i = array.length - 1; i >= 0; i--) {
  answer[i] = suffix_num * answer[i];
  suffix_num = suffix_num * array[i];
}
console.log(answer);
