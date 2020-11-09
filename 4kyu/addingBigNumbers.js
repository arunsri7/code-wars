function add(a, b) {
    if(b.length>a.length){
      let temp = b
      b = a
      a = temp
    }
    sum = ""
    let tmp,digitSum,aDigit,bDigit
    let carry = 0
    for(i=0;i<a.length;i++){
      aDigit = parseInt(a.charAt(a.length - 1 - i));
      bDigit = parseInt(b.charAt(b.length - 1 - i));
      bDigit = (bDigit) ? bDigit : 0;
      tmp = (carry+aDigit + bDigit).toString()
      digitSum = tmp.charAt(tmp.length - 1); 
      carry = parseInt(tmp.substr(0, tmp.length - 1)); 
      carry = (carry) ? carry : 0; 
      sum = (i===a.length-1)?(tmp+sum):(digitSum+sum)
    }
    return sum
  }