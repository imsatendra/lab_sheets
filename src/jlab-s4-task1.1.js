const checkMultipleOf3 = (number) => {
    const result = (number % 3 == 0) ? `${number} : yes` : `${number} : No`;
    return result;
}
console.log(checkMultipleOf3(15));
module.exports = {checkMultipleOf3};