function spoonerize(words) {
  let [a, b] = words.split(" ");
  [a, b] = [b[0] + a.slice(1), a[0] + b.slice(1)];
  return [a, b].join(" ");
}
