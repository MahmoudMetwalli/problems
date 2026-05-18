array = [1, 2, 3, 4, 5];
console.log(array);
prefix = new Array(5).fill(1);
suffix = new Array(5).fill(1);
let prefix_num = 1;

for (let i = 0; i < array.length; i++) {
  prefix[i] = prefix_num;
  prefix_num = prefix_num * array[i];
}
console.log(prefix);

let suffix_num = 1;

for (let i = array.length - 1; i >= 0; i--) {
  suffix[i] = suffix_num;
  suffix_num = suffix_num * array[i];
}
console.log(suffix);

answer = Array(5).fill(1);
for (let i = array.length - 1; i >= 0; i--) {
  answer[i] = suffix[i] * prefix[i];
}
console.log(answer);
