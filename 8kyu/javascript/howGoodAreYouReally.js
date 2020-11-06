function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce(sum)/classPoints.length
    if(average > yourPoints){
      return false
    }else{
      return true
    }
  }
  
  let sum = (sum, val) =>{
    return sum + val
  }