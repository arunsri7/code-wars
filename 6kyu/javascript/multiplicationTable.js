multiplicationTable = function(size) {
    nxnArray = Array()
    singleArray = Array.from(Array(size+1).keys())
    singleArray.shift()
    for(i=1;i<size+1;i++){
      var a = singleArray.map(function(x) { return x * i; });
      nxnArray.push(a)
    }
    return nxnArray
  }
  