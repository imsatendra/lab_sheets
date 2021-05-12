const word = "hello";

function getPattern(word) {
    let pattern = "";
    for(index = 0;index <word.length;index++) {
        pattern = pattern +"#"+ word.charAt(index);
    }
    return pattern;
}

console.log(getPattern(word));