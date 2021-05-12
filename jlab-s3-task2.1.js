const drinks = (n) => {
    if (n % 2 == 0 && n % 3 == 0) {
        return 'pepsicoke';
    } else if (n % 3 == 0) {
        return 'coke';
    } else if (n % 2 == 0) {
        return 'pepsi';
    } else {
        return "paperBoat"
    }

}
//console.log(drinks(21));

function drinksPrint(numbers) {
    let result = "";
    numbers.forEach(number => {
        //result = result + number + " : " + drinks(number) + "\n";
        let drink =drinks(number);
        result = result + `${number} : ${drink}` + "\n";
    })
    return result;
}

console.log(drinksPrint([5, 13, 15, , 20, 36]));