function getAge(person){
    if(person.yearOfDeath !== undefined)
        return person.yearOfDeath - person.yearOfBirth;
    
    let currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let ages = people.map(person => getAge(person));
    return people[ages.indexOf(Math.max(...ages))];
};

// Do not edit below this line
module.exports = findTheOldest;
