const numbers = [3, 5, 8];

const getPowerOfN = (number, power) => {
    let value = 1;
    for (let index = 1; index <= power; index++) {
        value = value * number;
    }
    return value;
}

const print4thPowerAnd5thPower = (numbers) => {
    numbers.forEach(number => {
        console.log(`4th Power - ${number} = ${getPowerOfN(number, 4)}`);
        console.log(`5th Power - ${number} = ${getPowerOfN(number, 5)}`);
    })
}
print4thPowerAnd5thPower(numbers);



