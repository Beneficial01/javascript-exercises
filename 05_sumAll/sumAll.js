function isPositiveInteger(num){
    return (Number.isInteger(num) && num >= 0)
}

const sumAll = function(a,b) {
    if(isPositiveInteger(a) && isPositiveInteger(b)){
        let max = Math.max(a,b);
        let min = Math.min(a,b);
        let sum = min;
        for(let i = min + 1; i <= max ; i++){
            sum += i;
        }
        return sum;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
