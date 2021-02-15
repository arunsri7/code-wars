function stringy(size) {
  string = "";
  for (i = 0; i < size; i++) {
    if (i % 2 == 0) {
      string += "1";
      continue;
    }
    string += 0;
  }
  return string;
}
