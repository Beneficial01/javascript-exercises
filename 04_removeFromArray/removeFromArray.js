const removeFromArray = function(arr, ...rest) {
    let s = new Set(rest);
    let arrClean = [];
    for(let x of arr){
        if(!s.has(x)){
            arrClean.push(x);
        }
    }
    return arrClean
};

// Do not edit below this line
module.exports = removeFromArray;
