function warnTheSheep(queue) {
  let position = queue.length - queue.indexOf("wolf") - 1
  if(position==0){
    return "Pls go away and stop eating my sheep"
  }
  return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
}