function isPrime(num) {
  for (let i = 0; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(arr.filter(item => isPrime(item)));
