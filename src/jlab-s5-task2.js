const getFinalEncodedWord = (encodedWord) => {
    return encodedWord.slice(0, -1);
}

const isEvenWordLength = (word) => {
    return word.length % 2 == 0;
}

const addHash = (isEven, word, index) => {
    return isEven ? "#" + word.charAt(index) : word.charAt(index) + "#";
}

const getIndex = (isEven) => {
    return isEven ? 1 : 0;
}

const getEncodedWord = (word, isEven) => {
    let encodedWord = "";
    for (let index = getIndex(isEven); index < word.length; index = index + 2) {
        encodedWord += addHash(isEven, word, index)
    }
    return encodedWord;
}

const encode = (word) => {
    const isEven = isEvenWordLength(word);
    const encodedWord = getEncodedWord(word, isEven);
    return isEven ? encodedWord : getFinalEncodedWord(encodedWord);
}

console.log(encode("satendr"));
