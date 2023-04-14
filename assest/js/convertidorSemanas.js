const diasEnAno = 365;
const diasEnSemana = 7;

let cantidadDias = parseInt(prompt("Ingresa una cantidad de días"));

let anios = Math.floor(cantidadDias / diasEnAno);
cantidadDias -= anios * diasEnAno;

let semanas = Math.floor(cantidadDias / diasEnSemana);
cantidadDias -= semanas * diasEnSemana;

let dias = cantidadDias;

console.log(anios + " años, " + semanas + " semanas, " + dias + " días");

location.href = "index.html";