const numbers = [1,7,9,12];

const cubeOfEachNumber = (number) => {
    return numbers.map(number => number*number*number);
}

console.log(cubeOfEachNumber(numbers));