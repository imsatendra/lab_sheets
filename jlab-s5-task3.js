const addArrays = (array1, array2) => {
    let sumOfBothArrays = 0;
    array1.forEach(number1 => {
        sumOfBothArrays = sumOfBothArrays + number1;
    })
    array2.forEach(number2 => {
        sumOfBothArrays =sumOfBothArrays +number2;
    })
    return `Total sum : ${sumOfBothArrays} `;
}
console.log(addArrays([9,3,7],[2,0]));