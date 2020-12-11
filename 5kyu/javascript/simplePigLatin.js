let pigIt = (str) => {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '?' || arr[i] == '!') {
            continue
        }
        arr[i] = (arr[i].slice(1, arr[i].length)) + arr[i].charAt(0) + "ay";
    }
    return arr.join(" ");
}