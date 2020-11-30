function generateRange(min, max, step){
  returnArray = Array()
  for (i=min;i<=max;i+=step){
    returnArray.push(i)
  }
  return returnArray
}
