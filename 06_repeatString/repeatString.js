const repeatString = function(word, times) {
    let string = ""; 
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        string += word; 
    }
    return string; 
}

//Always check the tests first since the function in the main .js file will work for all the tests provided. 

// Do not edit below this line
module.exports = repeatString;
