const tourney = array => {
    array2 = Array()
    array2.push(array)
    a = eliminate(array,array2)
    return a
}

let eliminate = (array,array2) => {
array3 = Array()
for(i=0;i<array.length;i+=2){
    if(i===array.length-1){
    console.log(array[i])
    array3.unshift(array[i])
    break
    }
    array3.push(getGreaterNum(array[i],array[i+1]))
}
array2.push(array3)
if(array3.length>1){
    eliminate(array3,array2)
}
return array2
} 

let getGreaterNum = (a,b) =>{
if(a>b){
    return a
}
return b
}