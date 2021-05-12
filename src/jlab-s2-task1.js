const square = (number) => {
    return number*number;
}

const cube = (number) => {
    return number*number*number;
}

const sum =(number) => {
    //return sumOfSquareAndCube = square(number) + cube(number);
    const square1 = square(number);
    const cube1 =  cube(number);
     return square1 + cube1;
}

console.log(sum(11));