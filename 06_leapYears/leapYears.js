const leapYears = function(year) {
    if ((year % 100 == 0 && Number.isInteger(year/100)) 
        && !(year % 400 == 0 && Number.isInteger(year/400)) 
        && !(year % 4 == 0 && Number.isInteger(year/4))) 
        return false; 
    if ((year % 4 == 0 && Number.isInteger(year/4)) 
        || (year % 400 == 0 && Number.isInteger(year/400)))
        return true; 

};

// Do not edit below this line
module.exports = leapYears;
