const assert =require("assert");

const { checkMultipleOf3 } = require('./jlab-s4-task1.1');

// const checkMultipleOf3 = (number) => {
//     const result = (number % 3 == 0) ? `${number} : yes` : `${number} : No`;
//     return result;
// }

const checkMultipleOf3InArray = (numbers) => {
    let result = "";
    numbers.forEach(number => {
        result = result + checkMultipleOf3(number) + "\n";  
    })
    return result;
}

console.log(checkMultipleOf3InArray([21, 4, 12, 32, 33]));