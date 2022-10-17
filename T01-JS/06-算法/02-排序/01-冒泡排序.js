const arr = [9, 8, 5, 3, 4, 2, 1];


function bubble(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length -i - 1; j++) {
      if (data[j] > data[j + 1]) {
        const tem = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tem;
      }
    }
  }
  return data;
}

console.log(bubble(arr));