// Unfinished
function solution(text, markers) { // There's some change
    let string = ""
    let concate = true
    for(let char of text){
        if(char !== markers[0] && char !== markers[1] && char !== markers[2] && concate === true){
            string += char
        }else if((char === markers[0] || char === markers[1] || char !== markers[2]) && concate === true){
            concate = false
        }else if(char === "\n"){
            concate = true;
            string += char
        }
    }
    let result = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] === " " && string[i+1] === "\n" || i === string.length - 1){
            
        }else {
            result += string[i]
        }
    }
    return result
};

console.log(solution('aa bb cc', [])) // 'aa bb cc'
console.log(solution('aa bb cc  ', [])) // 'aa bb cc'
console.log(solution('  aa bb cc', [])) // '  aa bb cc'
console.log(solution('  aa # bb # cc  ', [])) // '  aa # bb # cc'
console.log(solution('aa bb cc', ['#'])) // 'aa bb cc'
console.log(solution('aa bb # cc', ['#'])) // 'aa bb'
console.log(solution('aa# bb cc', ['#'])) // 'aa'
console.log(solution('aa #bb cc', ['#'])) // 'aa'
console.log(solution('aa # bb # cc', ['#'])) // 'aa'
console.log(solution('#aa bb cc', ['#'])) // ''
console.log(solution('#aa bb\ncc dd', ['#'])) // '\ncc dd'
console.log(solution('aa # bb\ncc dd', ['#'])) // 'aa\ncc dd'
console.log(solution('aa bb\n#cc dd', ['#'])) // 'aa bb\n'
console.log(solution('aa bb\ncc # dd', ['#'])) // 'aa bb\ncc'
console.log(solution('aa bb\ncc dd#', ['#'])) // 'aa bb\ncc dd'
console.log(solution('aa bb\ncc dd', ['#', '!'])) // 'aa bb\ncc dd'
console.log(solution('aa # bb\ncc dd', ['#', '!'])) // 'aa\ncc dd'
console.log(solution('aa bb\ncc ! dd', ['#', '!'])) // 'aa bb\ncc'
console.log(solution('#aa bb\n!cc dd', ['#', '!'])) // '\n'
console.log(solution('aa ! bb\ncc # dd', ['#', '!'])) // 'aa\ncc'
console.log(solution('aa bb#\ncc dd!', ['#', '!'])) // 'aa bb\ncc dd'
console.log(solution('aa + bb\ncc - dd\nee * ff', ['+', '-', '*'])) // 'aa\ncc\nee'
console.log(solution('aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$'])) // 'aa\ncc\nee'