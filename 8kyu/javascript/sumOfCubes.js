function sumCubes(n) {
  sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i * i * i;
  }
  return sum;
}
