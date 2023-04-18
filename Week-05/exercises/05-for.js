/////////////////////
///  CICLO FOR    ///
/////////////////////



/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
para mostrar una alerta utilizando cada una de las palabras.*/

console.log('-Exercise 5.a:')


var words = ["hello", "World", "JavaScript", "Fedeveloper", "Web"];

for (var i = 0; i < words.length; i++) {
  
  alert(words[i]);
}






/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/


console.log('-Excercise 5.b:')

var palabras = ["hello", "javascript", "display", "fedeveloper ", "strix"];


for (var i = 0; i < palabras.length; i++) {

  var primeraLetraMayus = palabras[i].substring(0, 1).toUpperCase();
  var restoPalabra = palabras[i].substring(1, palabras[i].length);
  var palabraMayus = primeraLetraMayus + restoPalabra;
  
  alert(palabraMayus);
}



/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/

console.log('-Exercise 5.c:')


var words = ["hello", "javascript", "display", "fedeveloper ", "web"];
var sentence = "";


for (var i = 0; i < words.length; i++) {
  
  sentence += words[i] + " ";
}
alert(sentence);


/*Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, 
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, 
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('-Exercise 5.d:')

var arrayEmpty = [];

for (var i = 0; i < 10; i++) {
  
  array.push(i);
}

console.log(arrayEmpty);