// Pedir al usuario que ingrese el primer número
let num1 = parseInt(prompt("ingreso un numero mayor a 0:")) ;

// Pedir al usuario que ingrese el segundo número
let num2 = parseInt(prompt("Ingrese otro número mayor a 0 y distinto de " + num1+" :")) 

// Realizar las operaciones con los dos números ingresados
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;

// Mostrar los resultados en la consola
alert("La suma de los dos números es: " + suma);
alert("La resta de los dos números es: " + resta);
alert("La división de los dos números es: " + division);
alert("La multiplicación de los dos números es: " + multiplicacion);

location.href = "index.html";