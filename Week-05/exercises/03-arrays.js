/////////////////////////////
///         ARRAYS        ///
/////////////////////////////

console.log('--EXERCISE 3: ARRAYS');

/*Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('-Exercise 3.a:');

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);






/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('-Exercise 3.b:');

var meses = ["enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

meses.sort();

console.log(meses);





/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('-Exercise 3.c:')

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.unshift("Hola");
meses.push("Mundo");

console.log(meses);