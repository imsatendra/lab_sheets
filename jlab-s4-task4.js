const getFormat = (word) => {
    const len = word.length;
    let newWord = "";
    for(let index =len/2; index <len; index++) {
        newWord = newWord + word.charAt(index);
    }
    newWord = newWord + "#"+word +"#";
    for(let index =0; index <len/2; index++) {
        newWord = newWord + word.charAt(index);
    }
    return newWord;
}
const result = getFormat("tool");
console.log(result);