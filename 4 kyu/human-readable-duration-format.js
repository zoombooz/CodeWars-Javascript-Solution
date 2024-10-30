function formatDuration (seconds) {
    // Complete this function
    if(seconds === 0){
    return "now"
    }
    let time = []
    time.push([Math.floor(seconds / 31_536_000), "year"])
    seconds = seconds % 31_536_000
    time.push([Math.floor(seconds / 86_400), "day"])
    seconds = seconds % 86_400
    time.push([Math.floor(seconds / 3600), "hour"])
    seconds = seconds % 3600
    time.push([Math.floor(seconds / 60), "minute"])
    time.push([seconds % 60, "second"])
    
    time = time.filter(el => el[0] !== 0)
    
    const formatter = (num, time) => {
        return num > 1 ? `${num} ${time}s` : `${num} ${time}`
    }
    
    let result = time.map((el, i) => {
        if(i === 0){
            return `${formatter(el[0], el[1])}`
        }else if(i !== time.length - 1){
            return `, ${formatter(el[0], el[1])}`
        }else{
            return ` and ${formatter(el[0], el[1])}`
        }
    })
    
    return result.join("")
}

console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"