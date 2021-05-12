const countLowerCaseCharacter = (word) => {
    let countLowerCase = 0;
    for(index =0;index<word.length;index++) {
        if(word.charAt(index) >= 'a' && word.charAt(index) <= 'z') {
            countLowerCase++;
        }
    }
    return `${word} : LowerCase = ${countLowerCase}`;
}

const countLowerCaseForEachWordInArray = (words) => {
    let result = "";
    words.forEach(word => {
        result = `${result}  ${countLowerCaseCharacter(word)} ` +"\n" ;
    })
    return result;
}

console.log(countLowerCaseForEachWordInArray(["TEST","car","HeeL"]));