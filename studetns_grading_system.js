let array_of_grades = [34, 38, 44, 68, 99, 57, 56, 77, 79, 49]
// passing grade 40

function gradingStudents(grades) {
    let result_arr = [];
    grades.forEach((grade) => {
        if (grade < 38) {
            result_arr.push(grade);
        } else {
            // nest multiple number of 5 from 44
            let nextMultipleOf5 = getTheNextMultiple(grade)
            let differNumber = Math.abs(nextMultipleOf5 - grade);
            differNumber < 3 ? result_arr.push(nextMultipleOf5) : result_arr.push(grade);


            // if (grade >= 38) {
            //     // nest multiple number of 5 from 44
            //     let nextMultipleOf5 = getTheNextMultiple(grade)
            //     let differNumber = Math.abs(nextMultipleOf5 - grade);
            //     if (differNumber < 3) {
            //         // do the round up
            //         result_arr.push(nextMultipleOf5)
            //     } else {
            //         result_arr.push(grade)
            //     }
            // }

            
        }

    });
    return result_arr;
}
function getTheNextMultiple(n) {
    // let x = Math.floor(n / 5);
    // let y = x + 1;
    // let multiple = y * 5;
    let multiple = (Math.floor(n / 5) + 1) * 5;
    return multiple;
};
console.log(array_of_grades);
console.log(gradingStudents(array_of_grades));