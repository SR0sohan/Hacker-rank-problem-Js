let ar = [1,2,3,4,5,10,11]

function array_sum(ar) {
    console.log(ar);
    let sum = 0;
//     // for (let i = 0; i < ar.length; i++) {
//     //     sum += ar[i];

//     // }
//     // return sum

    ar.map(ele => sum += ele)
    return sum
}
console.log(array_sum(ar));


// ToDo: daigonal difference

let diagonal_array = [ [11,2,4],
                       [4,5,6],
                       [10,8,-12]]
function diagonal_differnce(diagonal_array) {
    let lrt_diagonal = 0;
    let rtl_diagonal = 0;
    for (let i = 0; i < diagonal_array.length; i++) {
        lrt_diagonal += diagonal_array[i][i]
        rtl_diagonal += diagonal_array[i][diagonal_array.length-i-1]

    }
    let result = Math.abs(lrt_diagonal - rtl_diagonal)
    return result
}
console.log(diagonal_differnce(diagonal_array));
// //////////////////////////////////////////////////////////////////////////////


//! compareTriplets

let a = [45, 82, 19]
let b = [15, 97, 46]

function compareTriplets(a, b) {
    let alice_count = 0;
    let bob_count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice_count++
        } else if (a[i] < b[i]) {
            bob_count++
        }
    }
    let result = [alice_count, bob_count];
    return result;
}

console.log(compareTriplets(a, b));

// /////////////////////////////////////////////////////////////////////////////////////
// plus minus aray 
let dsiorderArray = [-4, 3, -9, 0, 4, 1]
function plusMinusArray(dsiorderArray) {
    let pos_count = 0;
    let neg_count = 0;
    let zero_count = 0;
//     // for (let i = 0; i < dsiorderArray.length; i++) {
//     //     if(dsiorderArray[i] > 0){
//     //         pos_count++
//     //     }else if(dsiorderArray[i]<0){
//     //         neg_count++
//     //     }else{
//     //         zero_count++
//     //     }
//     // }
    dsiorderArray.map(ele=>{
        if (ele > 0) {
            pos_count++;
        } else if(ele < 0){
            neg_count++;
        }else{
            zero_count++;
        }
    });
    let pos = (pos_count/dsiorderArray.length).toFixed(6);
    let neg = (neg_count/dsiorderArray.length).toFixed(6);
    let zero = (zero_count/dsiorderArray.length).toFixed (6);
//     // console.log(pos);
//     // console.log(neg);
//     // console.log(zero);
    console.log(pos + '\n' + neg +'\n' + zero);
}
// plusMinusArray(dsiorderArray);
// /////////////////////////////////////////////////////////////////////////////////

// birthday cake candles

let candles = [3,2,1,3]

function birthdatCakeCandles(candles) {
    let cnt = 0;
    let max = Math.max(...candles);
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            cnt++;
        }
    }
    return cnt;
}
console.log(birthdatCakeCandles(candles));
// //////////////////////////////////////////////////////////////////////

// mini max sum 

let numbers =[1,2,5,8,9]
function minMaxSum(numbers) {
    numbers.sort((a,b)=> a-b)
    let min = 0, max =0;
    for (let i = 0; i < numbers.length-1; i++) {
        min += numbers[i];
    }
    for (let j = 0; j < numbers.length; j++) {
        max += numbers[j];  
    }
    console.log(min,max);
}
minMaxSum(numbers)
// /////////////////////////////////////////////////////////////////////////////////////

// divisible sum pairs 

// let sum_numbers = [1,3,2,6,1,2];
// let n = 6;
// let k = 3;

// function divisibleSumPairs(n,k,sum_numbers) {
//     let counter_part =0;
//     for (let i = 0; i < n-1; i++) {
//         for (let j = i+1; j < n; j++) {
//          if ((sum_numbers[i] + sum_numbers[j]) % k ===0) {
//             counter_part++;
//          }   
//         }
//     }
//     return counter_part;
// }
// console.log(divisibleSumPairs(n,k,sum_numbers));

// //////////////////////////////////////////////////////////////////////////////////

// ToDo: Electronic shop 

let keyboards = [3, 1];
let drivers = [5, 2, 8];
let budget = 10;

function getMoneySpent(keyboards, drivers, budget) {
    let emty_arr=[], flag= false;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drivers.length; j++) {
           if (keyboards[i] + drivers[j] <= budget) {
            emty_arr.push(keyboards[i] + drivers[j])
            flag = true;
           }

        }

    }
    if (flag === false) {
        return '-1'
    } else {
        return Math.max(...emty_arr)
    }
}
console.log(getMoneySpent(keyboards, drivers, budget));

// ////////////////////////////////////////////////////////////////////////////

//word counting for camle case !(hwomany words there are in a camle case word)

let s = "saveChagesInTheEditor"

function camleCase(s) {
    let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let counter = 1;
    for (let i = 0; i < s.length; i++) {
       if (caps.includes(s[i])) {
        counter++;
       }
    }
    return counter;
}
console.log(camleCase(s));
// ToDo ///////////////////////////////////////////////////////////////////////////

// !capitalize every word of a sentece ******************////////////////

let sentence = 'the quick bwron fox jumped over the laxy dog';

// **ES6 methods applied here

let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
let capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');
console.log(capitalizeWords(sentence));

// **normal function methods here for easier understanding
// function toPascalCase(str) {
//     let words = str.split(' ');
//     for (let char of words) {
//         words[words.indexOf(char)] = char.charAt(0).toUpperCase() + char.slice(1);
//     }
//     return words.join(' ');
// }
// console.log(toPascalCase(sentence));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ToDo: findDigits of its own divisors; given an integer, for each digit that makes up the intiger determine whether it is a divisor. count the number of divisors  occuring withiin the intiger.

let n = 1012;

function findDigits(n) {
    let cnt = 0;
    let str = n.toString();
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (n % Number(arr[i]) === 0) {
            cnt++
        }
    }
    return cnt;
}
console.log(findDigits(n));


// ToDo: mars exploration :- letters in some of the SOS messages are altered by cosmic radiation during transmission .given the signal recieved by Earth as a string , determine how many letters of the SOS message have been changed by radiation.

let recieved_sos = 'SOSSPSSQSSOR';

function marsExploration(recieved_sos) {
    let count_sos = 0;
    for (let i = 0; i < recieved_sos.length; i += 3) {
        if (recieved_sos[i] !== 'S') {
            count_sos++;
        } if (recieved_sos[i+1] !== 'O') {
            count_sos++;
        } if(recieved_sos[i+2] !== 'S')[
            count_sos++
        ]

    }
    return count_sos;
}
console.log(marsExploration(recieved_sos));

// ToDo: Given two strings , determine if they share a common substring .A substring may be as samall as one charecter.

let string1 = "hellow world"
let string2 = "hi world"
function twoStrings(string1,string2) {
    let flag = false;
    for (let i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i])!== -1) {
            flag = true;
        }
        
    }
    if (flag === false) {
        return 'Common substring is NOT availabe'
    }else{
        return 'YES,Common substring is availabe'
    }
}
console.log(twoStrings(string1,string2));

// ToDo:equalize an array:-Given an array of integres the minimum number of elements to delete to leave only elements of equal value.

let num_array =[ 3,3,2,1,3]

function equalizeArray(num_array) {
    let count_array = 0, max_array =0;
    num_array.sort((a,b) => a-b)
    for (let i = 0; i < num_array.length; i++) {
        if(num_array[i] === num_array[i+1]) {
            count_array++
        }else{
            if(count_array > max_array){
                max_array =count_array 
            }
            count_array = 1
        }
        
    }
    return(num_array.length - max_array)
}
console.log(equalizeArray(num_array));

// ToDo: find the median:- the median of a list of members is essentially its middle element after sorting.the same number of element occurafterit as before. givem a list numbers with an odd number of elements, find the median.

let odd_nums = [0,1,2,4,6,5,3]

function findMedian(odd_nums) {
    odd_nums.sort((a,b)=> a-b)
    let midel = Math.floor(odd_nums.length/2)
    return odd_nums[midel]
}
console.log(findMedian(odd_nums));