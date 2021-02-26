function descendingOrder(n) {
  a = n.toString().split("");
  return Number(a.sort((a, b) => b - a).join(""));
}
