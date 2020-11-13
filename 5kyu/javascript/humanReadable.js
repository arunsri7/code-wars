function humanReadable(seconds) {
    var numhours = Math.floor(seconds % 31536000 / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    return checkForZeroes(numhours) + ":" + checkForZeroes(numminutes) + ":" + checkForZeroes(numseconds)
  }
  
  let checkForZeroes = (num) =>{
    if( num.toString().length < 2 || null){
      return '0' + num
    }else{
      return num
    }
  }