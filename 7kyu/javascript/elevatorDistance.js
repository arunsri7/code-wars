function elevatorDistance(array) {
  ed = 0;
  for (i = 0; i < array.length - 1; i++) {
    ed += Math.abs(array[i + 1] - array[i]);
  }
  return ed;
}
