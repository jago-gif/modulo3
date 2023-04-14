// Pedir al usuario que ingrese el primer número
let num1 = parseInt(prompt("ingreso un numero mayor a 0:")) ;

if (num1 <= 0) {
    alert("El número debe ser mayor a cero. Ingrese el primer número nuevamente.");
    num1 = prompt("Ingrese el primer número:");
  }

// Pedir al usuario que ingrese el segundo número
let num2 = parseInt(prompt("Ingrese otro número mayor a 0 y distinto de :" + num1)) 

if (num2 <= 0  || num2 === num1) {
    alert("El número debe ser mayor a cero y diferente del primer número. Ingrese el segundo número nuevamente.");
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

// Realizar las operaciones con los dos números ingresados
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;

// Mostrar los resultados en la consola
console.log("La suma de los dos números es: " + suma);
console.log("La resta de los dos números es: " + resta);
console.log("La división de los dos números es: " + division);
console.log("La multiplicación de los dos números es: " + multiplicacion);
