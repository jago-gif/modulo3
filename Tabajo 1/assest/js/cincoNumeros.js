//Se solicita al usuario ingresar un numero 
let num1 = parseInt(prompt("ingreso el primer numero :")) ;
//Se solicita al usuario ingresar siguiente numero 
let num2 = parseInt(prompt("ingreso el segundo numero :"));
//Se solicita al usuario ingresar siguiente numero 
let num3 = parseInt(prompt("ingreso el tercero numero :"));
//Se solicita al usuario ingresar siguiente numero 
let num4 = parseInt(prompt("ingreso el cuarto numero :")) ;
//Se solicita al usuario ingresar siguiente numero 
let num5 = parseInt(prompt("ingreso el quinto numero :")) ;
//se realiza la suma de los numeros ingresados
let suma = num1+num2+num3+num4+num5;
//se realiza el promedio de suma de los numeros
let promedio = Math.floor(suma/5);
//se muestra la alerta con la suma de los numeros
alert("La suma de los cinco numeros es de "+ suma);
//se muestra la alerta con el promedio de los mumeros
alert("El promedio de los cinco numeros es de "+ promedio);
//redirecciona a index
location.href = "index.html";