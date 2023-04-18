////////////////////////
///      Funciones   ///
////////////////////////

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 6.a:')

function suma(a, b) {
    return a + b;
}

var result = suma(2, 3);

console.log(result);




/*Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado.*/

console.log('-Exercise 6.b:')

function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert('Error: one of the parameters is not a number');
      return NaN;
    }
    
    return a + b;
  }
  
  var result = suma(2, "3");
  
  console.log(result);



/*Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero*/

console.log('-Exercise 6.c:');


function validateInteger(num) {

    return Number.isInteger(num);

}
console.log(validateInteger(10));





/*Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros.
 En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/

 console.log('-Exercise 6.d:');


 function sumarEnteros(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      alert("Error: Uno o ambos parámetros no son números.");
      return NaN;
    }
    

    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert("Error: Uno o ambos parámetros no son números enteros.");
      return Math.round(num1) + Math.round(num2);
    }
  

    return num1 + num2;


  }
  

  function validateInteger(num) {
    return Number.isInteger(num);
  }





/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('-Exercise 6.e:')


function sumaEnteros(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      alert("Error");
      return NaN;
    }
    
    if (!esEntero(number1) || !esEntero(number2)) {
      alert("Error");
      return Math.round(number1) + Math.round(numnumber22);
    }
  
    return number1 + number2;
  }
  
  function esEntero(num) {
    return Number.isInteger(num);
  }