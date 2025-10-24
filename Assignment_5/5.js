'use strict';
let moduuli = "Conditional expressions and loops";
let tehtava = "Assignment 5";
let tehtavananto = `
Write a program that prompts the user to enter a positive integer and calculates the sum of all the natural numbers up 
to and including that integer using a for loop. The program should display the sum on the HTML document.
Natural numbers are positive integers used for counting and representing quantities. Let’s consider the example of the 
number 5. When the user enters 5, the program will calculate the sum of all the natural numbers up to and including 5. 
In this case, the natural numbers are 1, 2, 3, 4, and 5. The program will use a for loop to iterate through each of 
these numbers and add them together. Finally, the program will display the sum, which in this case would be 15, on the 
HTML document.
3p
`
let tuloste;
let input = Number(prompt("Give positive integer"));
let sum = 0;

if (!Number.isInteger(input) || input < 1) {
    tuloste = "Positive integers only.";

} else {
    for (let i = 1; i <= input; i++) {
        sum += i;
    }

    tuloste = `Sum of natural numbers up to `+input+` is: ` +sum;
}


//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;