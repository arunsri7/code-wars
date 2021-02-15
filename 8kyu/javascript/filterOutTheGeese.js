function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (i = birds.length; i >= 0; i--) {
    if (geese.includes(birds[i])) {
      birds.splice(i, 1);
    }
  }
  return birds;
}
