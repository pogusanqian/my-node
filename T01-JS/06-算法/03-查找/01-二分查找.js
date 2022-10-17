
function binary_search(arr, value, startIndex = 0, endIndex = arr.length) {
  if (startIndex > endIndex) {
    return -1;
  }
  const mid = Math.floor((startIndex + endIndex) / 2);
  if (arr[mid] === value) {
    return mid;
  } else if (arr[mid] > value) {
    endIndex = mid - 1;
    return binary_search(arr, value, startIndex, endIndex);
  } else {
    startIndex = mid + 1;
    return binary_search(arr, value, startIndex, endIndex);
  }
}

const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log(binary_search(arr, 33));

