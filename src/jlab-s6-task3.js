const sum = (array3) => {
    let result = 0;
    array3.forEach(number => {
        result += number;
    })
    return result;
}

const usedFilter = (array3) => {
    return array3.filter(number => (number > 25 && number < 75))
}

const extractArrayInARangeAndSumOfThoseNumber = (array1, array2) => {
    return sum(usedFilter(array1.concat(array2)));
}

console.log(extractArrayInARangeAndSumOfThoseNumber([69, 31, 77], [26, 0]));