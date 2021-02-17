function switcheroo(x) {
  x = x.split("");
  return x
    .map((n) => {
      if (n == "a") {
        return "b";
      } else if (n == "b") {
        return "a";
      }
      return n;
    })
    .join("");
}
