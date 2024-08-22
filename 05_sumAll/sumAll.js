const sumAll = function(firstNum, secondNum) {
    // use CARL CAUSS'S FORMULA 
    // n = lastNum - firstNum + 1; 
    // sum of consecutive numbers = (n/2) * (firstNum + lastNum) 

    if (firstNum < 0|| secondNum < 0) {
        return "ERROR"; 
    } else if ((firstNum - Math.floor(firstNum)) !== 0
        || (secondNum - Math.floor(secondNum)) !== 0) {
        return "ERROR";
    } else if (isNaN(firstNum) || isNaN(secondNum)) {
        return "ERROR"; 
    }

    for (let i = 0; i <= Math.max(firstNum, secondNum); i++) {
        if (secondNum > firstNum) {
            n = secondNum - firstNum + 1; 
            result = (n/2) * (firstNum + secondNum);
        } else {
            n = firstNum - secondNum + 1; 
            result = (n/2) * (firstNum + secondNum);
        }
    }
    return result; 

};

// Do not edit below this line
module.exports = sumAll;

/*  for (let i = 0; i <= secondNum; i++) {
        n = secondNum - firstNum + 1; 
        result = (n/2) * (firstNum + secondNum); 
    }
    return result; */
