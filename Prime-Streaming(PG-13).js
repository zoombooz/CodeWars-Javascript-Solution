function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}
  
let result = [];
let counter = 0;
while(result.length <= 100){
    let prime = isPrime(counter);
    if(prime){
        result.push(counter)
    }
    counter++
}
return result;