// finding a random number between numbers 
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1,6));

// Arranging names(strigns) Alphabetically
const students = ["Nafiz", "Ronok", "Faria", "Fida", "Rokon", "Galib", "Hafizur", "Mim", "Bushra"]
console.log(students.sort());


// Arranging naumbers upwords
const roll_numbers = [5,7,8,4,6,1,3,2,9,]
console.log(roll_numbers.sort(function(a,b){
    return a-b;
    // return b-a; arrangign downword
}));

// leap year conting 
function leapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
        console.log(`${year} is a Leap year`);
    }else{
        console.log(`${year} is not a Leap year`);
    }
}

leapYear(2026);

// finding vowel

const vowels = ["a","e","i","o","u","A","E","I","O","U"]

function findVowel(sentence0) {
    let count = 0;
    const letters =Array.from(sentence0);
    letters.forEach(function (value, index, arrey) {
       if(vowels.includes(value)){
        count++
       } 
    });
    return count;
}

console.log(findVowel("I loved you"))

// find the duplicate numbers from ay arrey

const numbersss = [1,2,5,,5,5,5,9,8,4,3,,9,7,1,2]

const duplicates =numbersss.filter(function(value, index, arrey){
    return arrey.indexOf(value) !== index
});

console.log(duplicates)