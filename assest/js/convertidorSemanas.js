// se establece cuantos días tiene un año
const diasEnAno = 365;
//se establece cuandos dias tiene una semana
const diasEnSemana = 7;
//se solicita la cantidad de dias
let cantidadDias = parseInt(prompt("Ingresa una cantidad de días"));
//se establece la acción de definir cuandos años tiene la cantidad de dias seleccionados
let anios = Math.floor(cantidadDias / diasEnAno);
//se establece la accion para saber cuantos días tiene el resto de días ingresados
cantidadDias -= anios * diasEnAno;
//se establece cuantas semanas tiene el resto de dias del año
let semanas = Math.floor(cantidadDias / diasEnSemana);
//se establece el resto de los días sobrantes de la semana 
cantidadDias -= semanas * diasEnSemana;
// se establecen los días sobrantes de las semanas
let dias = cantidadDias;
//se muestra una alerta con la cantidad establecida
alert(anios + " años, " + semanas + " semanas, " + dias + " días");
//redirecciona al index
location.href = "index.html";