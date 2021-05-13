const getStar = (n) => {
    let star = "";
    for(index =1 ;index <= n ; index++) {
        star = star + "*";
    }
    return star;
}

const addIndexFirstorLastPosition = (index,star) => {
   return index%2 != 0 ? `${index}${star}` : `${star}${index}`
}

const getFinalPattern = (n) => {
    let finalPattern = "";
    let star = getStar(n);
    for(index =1; index<=n ; index++) {
        finalPattern += addIndexFirstorLastPosition(index , star) + "\n";
    }
    return finalPattern
}

console.log(getFinalPattern(4));