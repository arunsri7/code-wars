function solution(list) {
  let returnString = "";
  let LocateNum = 0;
  let firstSet = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 2 === list[i + 2] && !LocateNum) {
      LocateNum = list[i];
      if(i===0){
        firstSet = true
      }
    } else if (list[i] + 1 === list[i + 1] && LocateNum) {
      continue;
    } else if (LocateNum) {
      if(firstSet){
        returnString += `${LocateNum}-${list[i]}`
      }else{
        returnString += `,${LocateNum}-${list[i]}`
      }
      firstSet = false;
      LocateNum = 0;
    } else {
      if(i==0){
        returnString += list[i]
      }else{
        returnString += `,${list[i]}`
      }
    }
  }
  return returnString
}