function findDifference(a, b) {
  volume1 = a.reduce(function (product, value) {
    return product * value;
  });
  volume2 = b.reduce(function (product, value) {
    return product * value;
  });
  return Math.abs(volume2 - volume1);
}
