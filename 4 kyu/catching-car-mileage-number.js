function isInteresting(number, awesomePhrases) {
    // Validate for number less than 100
    if(number === 98 || number === 99){
        return 1
    }
    if(number < 100){
        return 0;
    }

    let result = 0;

    for(let i = number - 2; i <= number + 2; i++){
        // Check for all zeros digit
        if(i % (10 ** (String(i).length - 1)) === 0){
            if(i === number){
                return 2;
            }else {
                console.log("check1")
                result = 1;
            }
        }

        // Check for digit with the same number, incrementing digit, and decrementing digit
        let strNumber = String(i)
        let isSame = true;
        let isIncrement = true;
        let isDecrement = true;
        for(let j = 1; j < strNumber.length; j++){
            if(Number(strNumber[j]) !== Number(strNumber[0])){
                isSame = false;
            }
            if((Number(strNumber[j]) === 0 ? 10 : Number(strNumber[j])) !== Number(strNumber[j-1]) + 1){
                isIncrement = false;
            }
            if(Number(strNumber[j]) !== Number(strNumber[j-1]) - 1){
                isDecrement = false
            }
        }
        if(isSame || isIncrement || isDecrement){
            console.log(isSame, "<<<", isIncrement, ">>>", isDecrement)
            if(i === number){
                console.log("check1")
                return 2;
            }
            console.log("check2")
            result = 1;
        }

        // Check for palindrome
        let reverseWord = "";
        for(let j = strNumber.length-1; j >= 0; j--){
            reverseWord += strNumber[j]
        }
        if(reverseWord === strNumber){
            if(i === number){
                return 2;
            }
            console.log("check3");
            result = 1;
        }
    }

    // Check for interesting number based on awesomePhrases
    for(let perNum of awesomePhrases){
        if(number === perNum){
            return 2;
        }
        if(number - 2 === perNum || number - 1 === perNum || number + 1 === perNum || number + 2 === perNum){
            console.log("check4")
            result = 1;
        }
    }

    return result;
}
  
console.log(isInteresting(3, [1337, 256])); //0
console.log(isInteresting(1336, [1337, 256])); //1
console.log(isInteresting(1337, [1337, 256])); //2
console.log(isInteresting(11208, [1337, 256])); //0 
console.log(isInteresting(11209, [1337, 256])); //1 
console.log(isInteresting(11211, [1337, 256])); //2 
console.log(isInteresting(111113, [1337, 256])); //1
console.log(isInteresting(40000, [1337, 256])); //2
console.log(isInteresting(4321, [1337, 256])); //2
console.log(isInteresting(4320, [1337, 256])); //1
console.log(isInteresting(1234, [1337, 256])); //2
console.log(isInteresting(67890, [])) // 2
console.log(isInteresting(67888, [])) // 1
console.log(isInteresting(98, [])) // 1
