function checkOddOrEven(number) {
    return (number % 2 == 0) == 0 ? `${number} : even` : `${number} : odd`;
}

function checkEvenOddInArray(numbers) {
    let result = "";
    numbers.forEach(number => {
        result = result + checkOddOrEven(number) + "\n";
    })
    return result;
}

console.log(checkEvenOddInArray([10, 9, 5, 12, 7]));