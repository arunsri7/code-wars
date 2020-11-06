let expandedForm = (num) => {
    num = num.toString().split('')
    len = num.length - 1
    for(i of num){
        if(i==='0'){
          len--
          continue
        }
        var index = num.indexOf(i);
        i += Array(len).fill('0').join('');
        if (index !== -1) {
            num[index] = i;
        }
        len--
      }
    num = removeZeroes(num)
    return num.join(' + ')
  }
  
  //Function to remove 
  let removeZeroes = (array) => { 
    return array.filter((i) => i !== '0');
  }