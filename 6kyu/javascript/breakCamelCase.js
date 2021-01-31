function solution(string) {
  str = "";
  for (i of string) {
    if (isUpperCase(i)) {
      str += " ";
    }
    str += i;
  }
  return str;
}

let isUpperCase = (str) => str === str.toUpperCase();
