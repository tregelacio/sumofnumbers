const test = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(test));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(test));

function sumRecursive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursive(nums.slice(1, nums.length));
}

console.log(sumRecursive(test));

function sumUnderscore(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumUnderscore(test));
