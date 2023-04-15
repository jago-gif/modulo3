// Pedir al usuario que ingrese el primer número
let num1 = parseInt(prompt("ingreso un numero mayor a 0:")) ;

// Pedir al usuario que ingrese el segundo número
let num2 = parseInt(prompt("Ingrese otro número mayor a 0 y distinto de " + num1+" :")) 

// Realizar las operaciones con los dos números ingresados
//se realiza la suma
let suma = num1 + num2;
//se realiza la resta
let resta = num1 - num2;
 //se realiza la     division               
let division = num1 / num2;
 //se realiza la multiplicación
let multiplicacion = num1 * num2;

// se muestra la suma
alert("La suma de los dos números es: " + suma);
// se muestra la resta
alert("La resta de los dos números es: " + resta);
// se muestra la division
alert("La división de los dos números es: " + division);
// se muestra la multiplicación
alert("La multiplicación de los dos números es: " + multiplicacion);
//se redirecciona a index
location.href = "index.html";