let timer = null;

function debounce(index) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log('==========', index);
  }, 1000);
};

for (let i = 0; i < 10000; i++) {
  debounce(i);
}