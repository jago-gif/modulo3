let num1 = parseInt(prompt("ingreso el primer numero :")) ;
let num2 = parseInt(prompt("ingreso el segundo numero :"));
let num3 = parseInt(prompt("ingreso el tercero numero :"));
let num4 = parseInt(prompt("ingreso el cuarto numero :")) ;
let num5 = parseInt(prompt("ingreso el quinto numero :")) ;

let suma = num1+num2+num3+num4+num5;
let promedio = Math.floor(suma/5);

alert("La suma de los cinco numeros es de "+ suma);
alert("El promedio de los cinco numeros es de "+ promedio);

location.href = "index.html";