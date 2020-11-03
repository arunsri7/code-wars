function sortArray(array) {
    oddArray = Array()
    indexArray = Array()
    for(i=0;i<array.length;i++){
      if(array[i]%2!=0){
        oddArray.push(array[i])
        indexArray.push(i)
      }
    }
    oddArray.sort(function(a,b) { return a - b; }); //to avoid lexographic sorting
    for(i=0;i<oddArray.length;i++){
      array[indexArray[i]] = oddArray[i] 
    }
    return array
  }