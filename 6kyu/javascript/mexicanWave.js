function wave(str){
  arr = Array()
  for(i=0;i<str.length;i++){
    if(str[i]===" "){
      continue
    } 
    a = replaceUsingIndex(str,i,str[i].toUpperCase())
    arr.push(a)
  }
  return arr
}

let replaceUsingIndex = (string,index,replaceMent) => {
    var output  = string.split('');
        output[index] = replaceMent;
    return output.join('');
}