function modifiedSum(a, n) {
    sum = 0
    powerSum = 0
    for(i=0;i<a.length;i++){
      sum += a[i]
      powerSum += Math.pow(a[i],n)
    }
    console.log(powerSum,sum)
    return powerSum - sum
  }