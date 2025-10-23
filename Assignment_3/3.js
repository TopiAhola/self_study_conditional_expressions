'use strict';
let moduuli = "Conditional expressions and loops";
let tehtava = "Assignment 3";
let tehtavananto = `
Write a program that prompts the user to enter the lengths of three sides of a triangle and determines the type of triangle based on the side lengths. The program should classify the triangle as equilateral (all sides are equal), isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document.
try to use &&, || and ! operators
3p
`


let x1 = prompt("Point 1 X coordinate: ")
let y1 = prompt("Point 1 Y coordinate: ")
let x2 = prompt("Point 2 X coordinate: ")
let y2 = prompt("Point 2 y coordinate: ")

let distance = Math.sqrt(Math.pow((x2-x1),2)  + Math.pow((y2-y1),2) );

const tuloste = `Distance between points (${x1},${y1}) and (${x2},${y2}) is ${distance}`;

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;