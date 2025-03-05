function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

const palindromes = function (word) {
    //We first clean the string
    // Remove punctuation and spaces
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '');

    word = word.toLowerCase();

    for(let i = 0 ; i < Math.floor(word.length/2); i++ ){
        if(word[i] !== word[word.length - 1 - i])
            return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
