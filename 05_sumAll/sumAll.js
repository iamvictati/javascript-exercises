const sumAll = function(firstNum, secondNum) {
    // use CARL CAUSS'S FORMULA 
    // n = lastNum - firstNum + 1; 
    // sum of consecutive numbers = (n/2) * (firstNum + lastNum) 

    if (firstNum < 0|| secondNum < 0) {
        return "ERROR"; 
    } else if ((firstNum - Math.floor(firstNum)) !== 0
        || (secondNum - Math.floor(secondNum)) !== 0) {
        return "ERROR";
    } else if (typeof firstNum !== "number" 
        || typeof secondNum !== "number") {
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

    //A MUCH BETTER SOLUTION: 

    /*  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
        if (min < 0 || max < 0) return "ERROR";
        if (min > max) {
            const temp = min;
            min = max;
            max = temp;
        }
        
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    */
};

// Do not edit below this line
module.exports = sumAll;


