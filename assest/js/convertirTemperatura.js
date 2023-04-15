//se establece cuando equivale kelvin
let kelvin =  273.15;
//se establece cuando equivale fahrenheit
let fahrenheit = 32;
// se establece la variable que contendrá el resultado de kelvin
let rKelvin ;
// se establece la variable que contedrá el resultado de fahrenheit
let rFahrenheit ;
//se solicita el primer numero al usuario
let numero1 = parseFloat(prompt("escriba un una temperatura"));
//se hace la operación para generar los grados kelvin
rKelvin = numero1 + kelvin;
//se hace la operación para generar los grados fahrenheit
rFahrenheit = (numero1 * 9/5) + fahrenheit;
//se muestra una alerta de la temperatura en kelvin
alert("su temperatura en Kelvin es de  "+rKelvin)
//se muestra una alerta de la temperatura en Fahrenheit
alert("su temperatura en Fahrenheit es de  "+rFahrenheit)
//se muestra por consola la temperatura en kelvin
console.log(rKelvin)
//se muestra por consola la temperatura en kelvin
console.log(rFahrenheit)
//redirecciona al index
location.href = "index.html";