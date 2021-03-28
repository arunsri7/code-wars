function digitize(n) {
  a = n.toString().split("").reverse();
  a = a.map((x) => Number(x));
  return a;
}
