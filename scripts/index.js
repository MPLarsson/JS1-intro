/* alert("Please click F12"); */

console.log("Hello World!");

document.getElementById("myBtn").addEventListener("click",showVariables);

function showVariables() {
    let name = "Mattias Larsson";
    let age = 32;
    let color = "Green";

    console.log(`Hello! My name is ${name}.`);
    console.log(`I am ${age} years old.`)
    console.log(`My favourite color is ${color}.`)
}

document.getElementById("calculateBtn").addEventListener("click",showCalculations);

function showCalculations() {
    let x=12
    let y=24

    console.log(x+y);

    console.log(y-x);

    console.log(y/x);

    console.log(x*y);
}


