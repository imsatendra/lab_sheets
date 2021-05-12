const countInRange = (word) => {
    let count = 0;
    for(index =0 ;index < word.length; index++) {
    if((word.charAt(index) >= 'a' && word.charAt(index) <= 'd') || (word.charAt(index) >= 'A' && word.charAt(index) <= 'D')) {
        count++;
    }
    }
    
    return count;
}
console.log(countInRange("abc"));