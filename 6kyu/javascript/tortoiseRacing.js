function race(v1, v2, g) {
  if (v1 > v2) {
    return null;
  }
  time = g / (v2 - v1);
  var decimalTime = parseFloat(time);
  decimalTime = decimalTime * 60 * 60;
  var hours = Math.floor(decimalTime / (60 * 60));
  decimalTime = decimalTime - hours * 60 * 60;
  var minutes = Math.floor(decimalTime / 60);
  decimalTime = decimalTime - minutes * 60;
  var seconds = Math.floor(decimalTime);
  return [hours, minutes, seconds];
}
