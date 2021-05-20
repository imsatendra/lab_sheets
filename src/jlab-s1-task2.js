const numbers = [1,7,9,12];

const squareOfEachNumber = (numbers) => {
   return numbers.map(number =>  {return number*number})
    
}
//console.log(squareOfEachNumber(numbers));

module.exports = { squareOfEachNumber };