function dashatize(num) {
    if(num < -1 || num > 1){
      return dashatizeIt(Math.abs(num))
    }
    return Math.abs(num).toString()
  }
  
  
  
  let dashatizeIt = (num) => {
     num = num.toString().split('')
    for(i=0;i<num.length;i++){
      if(Number(num[i]) %2 ===0){
        continue
      }
      if(i===0){
        num[0]= num[0] + '-'
        continue
      }else if(i === num.length-1){
        if(Number(num[i-1])%2!=0){
          continue
        }
        num[i] = '-' + num[i]
        continue
      }else {
         if(Number(num[i-1])%2!=0){
           num[i] = num[i] + '-'
        }else{
        num[i] = '-' + num[i] + '-'
          }
      }
    }
    return num.join('')
  }
  