function getStrings(city) {
    let obj = {}
    let arr = Array()
    city.split('').forEach(x => x != ' ' ? arr.push(x.toLowerCase()) : '')
    arr.map(e => !obj[e] ? obj[e] = '*' : obj[e] += '*')
    str = JSON.stringify(obj).replace(/["{}]/g, '')
    return str
}
