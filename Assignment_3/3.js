'use strict';
let moduuli = "Conditional expressions and loops";
let tehtava = "Assignment 3";
let tehtavananto = `
Write a program that prompts the user to enter the lengths of three sides of a triangle and determines the type of triangle based on the side lengths.
The program should classify the triangle as equilateral (all sides are equal), 
isosceles (two sides are equal), or scalene (no sides are equal). 
Print the result on the HTML document.
try to use &&, || and ! operators
3p
`


let side1 = Number(prompt("Side 1 length: "));
let side2 = Number(prompt("Side 2 length: "));
let side3 = Number(prompt("Side 3 length: "));
let tuloste = `Sides: ${side1}, ${side2}, ${side3}. `;

if ((isNaN(side1) || isNaN(side2) || isNaN(side3))
    || (side1 <= 0 || side2 <= 0 || side3 <= 0)
){
    tuloste += "Bad input";

} else if (side1 === side2 && side1 === side3) {
    tuloste += "The triangle is equilateral."

} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    tuloste += "The triangle is scalene."

} else if ((side1 === side2 && side1 !== side3)
    || (side1 === side3 && side1 !== side2)
    || (side2 === side3 && side1 !== side3)
) {
    tuloste += "The triangle is isosceles."

}

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;