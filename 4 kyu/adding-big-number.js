function add(a, b) {
    const addZero = (strNum, howManyZero) => {
        let zeros = ""
        for(let i = 0; i < howManyZero; i++){
            zeros += "0"
        }
        return zeros + strNum
    }
    
    if(a.length !== b.length){
        if(a.length > b.length){
            b = addZero(b, a.length - b.length)
        }else {
            a = addZero(a, b.length - a.length)
        }
    }
    
    let result = [];
    let tempNum = 0;
    for(let i = a.length - 1; i >= 0; i--){
        let add = Number(a[i]) + Number(b[i]) + tempNum
        if(add >= 10){
            tempNum = Math.floor(add / 10)
            result.unshift(String(add % 10))
        }else {
            tempNum = 0
            result.unshift(String(add))
        }
    }
    if(tempNum){
        result.unshift(String(tempNum))
    }
    return result.join("")
}

console.log(add("1", "1")) // 2
console.log(add("123", "456")) // 579 
console.log(add("888", "222")) // 1110
console.log(add("1372", "69")) // 1441
console.log(add("12", "456")) // 468
console.log(add("101", "100")) // 201 
console.log(add('63829983432984289347293874', '90938498237058927340892374089')) // 91002328220491911630239667963