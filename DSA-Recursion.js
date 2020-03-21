// #1 
function countingSheep(number) {
    //base case
    if(number === 0) {
        return ('All sheeps jumped over the fence')
    }
    // recursive case
    return console.log(number + ': Another sheep jumps over the fence'),
    countingSheep(number-1)
}

countingSheep(10)


// #2 
function powerCalculator(base, exponent) {
    //base case
    if(exponent === 1) {
        return base 
    }
    
    //recursivecase
    return base * (powerCalculator(base, exponent -1))
}

powerCalculator(3, 4)


// #3
function reverseString(string) {
    //base case
    if(string.length === 0) {
        return string
    }
    //recursive case
    return reverseString(string.substring(1)) + string.charAt(0)
}

reverseString('hello')


// #4
function triangular(number) {
    //base case
    if(number === 1) {
        return number
    }

    //recursive case 

    return number + triangular(number -1)
}

triangular(8)


//#5
