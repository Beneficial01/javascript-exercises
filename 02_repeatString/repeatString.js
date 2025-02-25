const repeatString = function(strToRepeat, numTimes) {
    if(numTimes < 0)
        // We are asked to return a string containing error in case of a negative factor
        return 'ERROR';
        
    if(numTimes === 0 || strToRepeat.length === 0)
        return '';

    let i;
    let strToAdd = strToRepeat;
    for(i = 0; i < numTimes - 1; i++){
        strToRepeat += strToAdd;
    }
    
    return strToRepeat
};

// Do not edit below this line
module.exports = repeatString;
