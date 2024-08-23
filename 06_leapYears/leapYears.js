const leapYears = function(year) {
    if (year % 4 === 0 
        && (!(year % 100 === 0) || year % 400 === 0)) {
    return true
    } else {
        return false
    }
// BE CAREFUL WITH THE PLACEMENT OF INTERROGATION MARKS. 
};

// Do not edit below this line
module.exports = leapYears;
