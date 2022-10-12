const arr = [9, 8, 5, 3, 4, 2, 1];

// 额外声明了left和right
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const num = arr[0];
  let left = [], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= num)
      left.push(arr[i]);
    else
      right.push(arr[i]);
  }
  return quickSort(left).concat([num], quickSort(right));
}

console.log(quickSort(arr));
