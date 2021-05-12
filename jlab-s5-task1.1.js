const countLowerCaseCharacter = (word) => {
    let countLowerCase = 0;
    for (index = 0; index < word.length; index++) {
        if (word.charAt(index) >= 'a' && word.charAt(index) <= 'z') {
            countLowerCase++;
        }
    }
    return `${word} : LowerCase = ${countLowerCase}`;
}
console.log(countLowerCaseCharacter("TriSect"));
//module.exports = { countLowerCaseCharacter };