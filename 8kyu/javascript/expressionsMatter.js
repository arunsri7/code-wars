function expressionMatter(a, b, c) {
  one = a * (b + c);
  two = a * b * c;
  three = a + b * c;
  four = (a + b) * c;
  five = a + b + c;
  return Math.max(one, two, three, four, five);
}
