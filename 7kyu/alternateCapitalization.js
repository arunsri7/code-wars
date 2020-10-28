let capitalize = (s) => {
  const even = s.split('').map((char,i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
  const odd = s.split('').map((char,i) => i % 2 != 0 ? char.toUpperCase() : char.toLowerCase())
  return [even.join(""),odd.join("")]
};

