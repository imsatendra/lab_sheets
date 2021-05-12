const assert = require("assert");

const { getGrades } = require('./jlab-s4-task3.1');

const getGradesOf5Subject = (numbers) => {
    let Grades = "";
    numbers.forEach(number => { 
         Grades = Grades + getGrades(number) + "\n";
    })
    return Grades;
}
console.log(getGradesOf5Subject([78,75,40,39,99]));