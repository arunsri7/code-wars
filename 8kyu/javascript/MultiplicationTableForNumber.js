function multiTable(number) {
  string = ""
  for(i=1;i<11;i++){
    let result = i*number
    if(i==10){
       string += `${i} * ${number} = ${result}` 
       continue
    }
    string += `${i} * ${number} = ${result}\n` 
  }
  return string
}