'use strict';
let moduuli = "Conditional expressions and loops";
let tehtava = "Assignment 4";
let tehtavananto = `
Write a program that prompts the user to enter their score for a course assessment and determines their grade 
based on the following grading scale:
Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.
Print the result on the HTML document.
3p
`

let score = prompt("Score: ");
let grade = 0;
let badInput = false;

if (0<= score && score <= 39) {
    grade = 0;
} else if (40<= score && score <= 51) {
    grade = 1;
} else if (52<= score && score <= 63) {
    grade = 2;
} else if (64<= score && score <= 75) {
    grade = 3;
} else if (76<= score && score <= 87) {
    grade = 4;
} else if (88 <= score && score <= 100) {
    grade = 5;
} else {
    badInput = true;
}

let tuloste;
if (!badInput) {
    tuloste = `Score: ${score} <br> Grade: ${grade}`;
} else {
    tuloste = `Score: ${score} is invalid.`;
}


//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;



/*
switch (true) {
    case (0<= score <=39) : grade = 0; break;
    case (40<= score <=51) : grade = 1; break;
    case (52<= score <=63) : grade = 2; break;
    case (64<= score <=75) : grade = 3; break;
    case (76<= score <=87) : grade = 4; break;
    case (88<= score <=100) : grade = 5; break;
    //default: grade = 0;
}

 */