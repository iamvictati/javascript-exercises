const sumAll = function(firstNum, secondNum) {
    // use CARL CAUSS'S FORMULA 
    // n = lastNum - firstNum + 1; 
    // sum of consecutive numbers = (n/2) * (firstNum + lastNum) 
    
    for (let i = 0; i <= secondNum; i++) {
        n = secondNum - firstNum + 1; 
        result = (n/2) * (firstNum + secondNum); 
    }
    return result; 

};

// Do not edit below this line
module.exports = sumAll;
