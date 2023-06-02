//Made by: Roberto Ochoa Cuevas.

//function to get values of the form.
function getValues(event){

event.preventDefault(); // Prevent page reload
    
var boxA = document.getElementById("A");
var A = boxA.value;

var boxB = document.getElementById("B");
var B = boxB.value;

var boxC = document.getElementById("C");
var C = boxC.value;

var boxa = document.getElementById("a");
var a = boxa.value;

var boxb = document.getElementById("b");
var b = boxb.value;

var boxc = document.getElementById("c");
var c = boxc.value;

}

//button
let button = document.getElementById('submit');
button.addEventListener('click',getValues)



