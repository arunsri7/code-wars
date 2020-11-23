function add(x, y){
    if (x == 0) return y;
    if (y == 0) return x;
    while (y != 0) {
        let carry = x & y;
        x ^= y;
        y = carry << 1;
    }
    return x;
  }