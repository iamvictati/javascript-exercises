const reverseString = function(phrase) {
    let joinPhrase = ""; 
    splitPhrase = phrase.split("");
    reversePhrase = splitPhrase.reverse(); 
    joinPhrase = reversePhrase.join(""); 
    return joinPhrase; 
};

// Do not edit below this line
module.exports = reverseString;
