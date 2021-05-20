const array1 = [1,2,25,30,35,51];
const array2 = [1,2,3,4];

const getAllElementInArray = (array1, array2) => {
    const newArray = [...array1, ...array2] ;
    //console.log(`${newArray}`);
    console.log(`size : ${newArray.length}`);
    return `${newArray}`;
}

console.log(getAllElementInArray(array1, array2));
