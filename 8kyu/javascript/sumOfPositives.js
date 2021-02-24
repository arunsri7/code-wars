function positiveSum(arr) {
    sum = 0
    for(i of arr){
      if(i>0){
        sum += i
      }
    }
    return sum
  }