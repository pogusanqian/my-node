const fs = require('fs');
const path = require('path');

function getFilePathsAtDir(dirLocation) {
  const fileNameArr = [];
  function readNames(pathLocation) {
    const dirInfo = fs.readdirSync(pathLocation, {
      withFileTypes: true,
    });
    dirInfo.forEach((item) => {
      const location = path.join(pathLocation, item.name);
      item.isFile() ? fileNameArr.push(location) : readNames(location);
    });
  }

  readNames(dirLocation);
  return fileNameArr;
}

console.log(getFilePathsAtDir('D:/Code/my-study/31-算法'));