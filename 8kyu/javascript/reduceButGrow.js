function grow(x) {
  let product = 1;
  for (i = 0; i < x.length; i++) {
    product = product * x[i];
  }

  return product;
}

//using reduce
function grow(x) {
  return x.reduce((a, b) => a * b);
}
