function rowWeights(array){
    odd = 0
    even = 0
    for (i=0;i<array.length;i++){
      if(i%2==0){
        even += array[i]
        continue
      }
      odd += array[i]
    }
    return [even,odd]
  }