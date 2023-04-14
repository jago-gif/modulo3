let kelvin =  273.15;
let fahrenheit = 32;
let rKelvin ;
let rFahrenheit ;
let numero1 = parseFloat(prompt("escriba un una temperatura"));

rKelvin = numero1 + kelvin;
rFahrenheit = (numero1 * 9/5) + fahrenheit;

alert("su temperatura en Kelvin es de  "+rKelvin)
alert("su temperatura en Fahrenheit es de  "+rFahrenheit)

console.log(rKelvin)
console.log(rFahrenheit)

location.href = "index.html";