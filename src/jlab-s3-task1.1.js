const number = 4;

function checkOddOrEven(number) {
    if (number % 2 == 0) {
        return `${number} : even`;
    } else {
        return `${number} : odd`;
    }
}

console.log(checkOddOrEven(number));