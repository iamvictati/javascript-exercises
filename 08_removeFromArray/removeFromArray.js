const removeFromArray = function(array, ...args) {
    //SOLUTION: USE ARROW FUNCTION to FILTER ANYTHING IN array EXCEPT args ELEMENTS. 
    //return array.filter(element => !args.includes(val))

    //Using a named function: 
    function anythingButArgs(element) {
        return !args.includes(element); 
    }
    return array.filter(anythingButArgs); 
};

// Do not edit below this line
module.exports = removeFromArray;

//NOTES: 
// First, ask yourself if a loop is actually necessary at all. 
// Second, if not, then a simple new value assignment operation will do the trick. 
