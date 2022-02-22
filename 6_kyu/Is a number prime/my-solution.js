function isPrime(num) {
  if (num > 1) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
  } else return false;

  return true;
}
