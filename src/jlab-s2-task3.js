function getStar(n) {
    let star = "";
    for (index = 0; index < n; index++) {
        star += '*';
    }
    return star;
}

function getpattern(n) {
    let pattern = "";
    let row = "";
    for (let index = 1; index <= n; index++) {
        row = row + getStar(n) + index;
        pattern = pattern + row + "\n";
    }
    return pattern.substr(0, pattern.length-1);
}

console.log(getpattern(4));