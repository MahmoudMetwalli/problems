// TODO: Pass

function bulbSwitch(n) {
  // Create a boolean array to mark primes
  let prime = new Array(n + 1).fill(true);
  let on = n + 1;
  // Apply Sieve of Eratosthenes
  console.log(prime);
  for (let p = 2; p <= n; p++) {
    console.log(`Number ${p}, on :${prime[p]}`);
    if (prime[p]) {
      // Mark all multiples of p as not prime
      for (let i = p; i <= n; i += p) {
        prime[i] = !prime[i];
        if (prime[i]) {
          on++;
        } else {
          on--;
        }
      }
    }
  }
  console.log(prime);
  return on;
}
console.log(bulbSwitch(8));
