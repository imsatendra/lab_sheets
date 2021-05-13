const decodeFor0 = (word,number) => {
    let encodedWord = "";
    if(number == 0){
        for (index = 0; index < word.length; index++) {
            // if (word.charAt(index) == '#') {
            //     encodedWord += 'a'
            // } else if (word.charAt(index) == '*') {
            //     encodedWord += 'e'
            // } else {
            //     encodedWord += word.charAt(index);
            // }
            word.charAt(index) == '#' ?  encodedWord += 'a' :  encodedWord += 'e'
        }
        return encodedWord;
    }
   
}

const decodeFor1 = (word) => {
    let encodedWord = "";
    for (index = 0; index < word.length; index++) {
        if (word.charAt(index) == '#') {
            encodedWord += 'a'
        } else if (word.charAt(index) == '*') {
            encodedWord += 'e'
        } else {
            encodedWord += word.charAt(index);
        }

    }
    return encodedWord;
}

const replaceHash = (isHash , isZero) => {
    
} 


const decode = (word,number) => {
   return number == 0 ? decodeFor0(word) : decodeFor1(word);
} 

console.log(decode("s*l#d" ,1));
