function solution(list){
    // TODO: complete solution 
    let tempArr = []
    let newArr = []
    list.forEach((el, i) => {
        if(!tempArr.length){
            tempArr.push(el)
        }else if(tempArr[tempArr.length-1] + 1 === el){
            tempArr.push(el)
        }else {
            newArr.push(tempArr)
            tempArr = []
            tempArr.push(el)
        }
        if(i === list.length-1){
            newArr.push(tempArr)
        }
    })
    return newArr.map(el => el.length > 2 ? `${el[0]}-${el[el.length-1]}` : el.length > 1 ? `${el[0]},${el[1]}` : `${el[0]}` ).join(",")
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) // "-6,-3-1,3-5,7-11,14,15,17-20"