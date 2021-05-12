const numbers = [10,0,3,4,5];

const removeMultipleOf5AndReplace0With99 = (numbers) => {
    const newNumbers =[];
    let arrayLength = 0;
    let str ="";
    numbers.forEach(number => {
        if(number == 0) {
            newNumbers.push(99);
            arrayLength++;
        } else if(number%5 != 0) {
            newNumbers.push(number);
            arrayLength++;
        }
    })
    console.log(`size : ${arrayLength}`);
    return newNumbers;
  
} 

console.log(removeMultipleOf5AndReplace0With99(numbers));