//////////////////////////////////
//    Variables y Operadores   //
/////////////////////////////////

console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

//Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
console.log('-Exercise 1.a:');

var numbFirst = 5;
var numbSecond = 10;
var result = numbFirst + numbSecond;

console.log(result);


//Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('-Exercise 1.b:');

var hi1 = "hello, ";
var hi2 = "how you doing?";

var answerhi = hi1 + hi2;

console.log(answerhi);


// Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
 
console.log('-Exercise 1.c:');

var variable1 = "hello";
var variable2 = "world";

var sumLength = variable1.length + variable2.length;

console.log("The sum of the lengths of the variables is: " + sumLength);
