'use strict';
let moduuli = "Conditional expressions and loops";
let tehtava = "Assignment 6";
let tehtavananto = `Write a program that prompts the user to enter a positive integer and generates a multiplication
 table up to that number using a for loop. The multiplication table displays the product of each pair of numbers from 1 to the entered number.
Your program should follow these steps:
Write JavaScript code that prompts the user to enter a positive integer using the prompt() function. Store the user’s input in a variable.
Convert the user’s input from a string to a number.
Use nested for loops to generate the multiplication table.
The outer loop will iterate from 1 up to the entered number, representing the rows of the table.
The inner loop will also iterate from 1 up to the entered number, representing the columns of the table.
Inside the nested loops, calculate the product of the current row and column values.
Display each product in a formatted way to create the multiplication table on the HTML document.
Example Output:

 Enter a positive integer: 5
       
 Multiplication Table:
 1   2   3   4   5
 2   4   6   8   10
 3   6   9   12  15
 4   8   12  16  20
 5   10  15  20  25

`
let input = Number(prompt("Give positive integer"));

if (!Number.isInteger(input) || input < 1) {
    tuloste = "Positive integers only.";
}

//taulukko
let taulukko = document.createElement("table");

//head
let caption = document.createElement("caption");
caption.innerHTML = "Multiplication table";
taulukko.appendChild(caption);

//body
let body = document.createElement("tbody");
taulukko.appendChild(body);

//rivit ja sarakkeet
for (let rivi = 1; rivi <= input; rivi++) {
    let rivielem = document.createElement("tr");

    for (let sarake = 1; sarake <= input; sarake++) {
        let sarakeelement = document.createElement("td");
        sarakeelement.innerText = (sarake * rivi).toString(10);
        sarakeelement.setAttribute("style", "padding:10px");
        rivielem.appendChild(sarakeelement);
    }

    body.appendChild(rivielem);
}


//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#taulukko').appendChild(taulukko);