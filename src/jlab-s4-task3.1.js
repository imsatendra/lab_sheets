const getGrades = (marks) => {
    if(marks >= 90) {
        return "Grade A";
    } else if(marks >=75 && marks< 90) {
        return "Grade B";
    } else if(marks >= 40 && marks < 75) {
        return "Grade C";
    } else {
        return "Fail";
    }
}

//console.log(getGrades(36));
module.exports = { getGrades };