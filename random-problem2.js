const line = "learn like sohan. It is all about learning and developing yourself. sohan is a lazy person, most of the time sohan is found doing nothing but sohan pretends he is so busy. such a jackass sohan is!";

const match_found = line.match (/sohan/gi);

const ranged = match_found ? match_found.length: 0;
console.log (ranged)

let position = line.search(/sohan/i)
position = position >= 0 ? position:"not found";
console.log(position)

// ///////////////////

function linearSearch(arr, val) {
    const lengt = arr.length;
    for (let i = 0; i< lengt; i++) {
        if (arr[i] === val) {
            return i;
        }
        
    }
    return 'Not found';
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'd','c'], 'd'));

// ///////////////////////

function long_string(names){
    let long_word = '';
    for (const name of names) {
        if(name.length > long_word.length){
            long_word =name
        }
    }
    return [long_word,names.indexOf(long_word)]
}
console.log(long_string(['sohanur rahman sohan', 'hasibul hasan shanto', 'ariful islam robin', 'abu bakkar siddique bappy']));

// /////////////////////////

function tinPac(nums) {
    for (let i = 1; i <= nums; i++) {
        if(i % 15 === 0){
            console.log(`${i} is tinPac}`);
        }else if(i % 3 ===0){
            console.log(`${i} is tin}`);
        }else if(i % 5 ===0){
            console.log(`${i} is pac}`);
        }else{
            console.log(i);
        }
    }
}
tinPac(6)
// ///////////////////////////

const mixed_arr = [
    "lwa",
    undefined,
    "learn wuickly",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "thank you",
    NaN
];
// const exist_arr = mixed_arr.filter(function(el){
//     if(el){
//         return true;
//     }else{
//         return false; 
//     }
// });
const exist_arr = mixed_arr.filter(Boolean);

console.log(exist_arr);

// ///////////////////////////

const mixed_aobj = {
    a: "sohan",
    b: undefined,
    c: "learn wuickly",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "thank you",
    k: NaN
};

const truthy_obj = function(mixed_aobj){
    for (const i in mixed_aobj) {
        if (!mixed_aobj[i]) {
           delete mixed_aobj[i]
            
        }
    }

    return mixed_aobj;
}

console.log(truthy_obj(mixed_aobj));