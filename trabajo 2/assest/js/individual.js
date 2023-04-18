// Pedir al usuario que ingrese la edad
let edad = parseInt(prompt("ingrese su edad:")) ;
const aprobado = 120;


let puedeEntrar = function(){
if(edad<18){
  alert("no puedes entrar porque estás muy chico")
}else{
  let nombre = (prompt("ingreso su nombre:")) ;
  let apellido = (prompt("ingreso apellido:")) ;
  let carrera = (prompt("ingreso su carrera:")) ;
  let ramoA = (prompt("ingreso ramo:")) ;
  let notaA1 = parseInt(prompt("ingrese nota 1:")) ;
  let notaA2 = parseInt(prompt("ingreso nota 2:")) ;
  let notaA3 = parseInt(prompt("ingreso nota 3:")) ;
  let promedioA =Math.ceil((notaA1+notaA2+notaA3)/3);
  let ramoB = (prompt("ingreso ramo:")) ;
  let notaB1 = parseInt(prompt("ingrese nota 1:")) ;
  let notaB2 = parseInt(prompt("ingreso nota 2:")) ;
  let notaB3 = parseInt(prompt("ingreso nota 3:")) ;
  let promedioB =Math.ceil((notaB1+notaB2+notaB3)/3);
  let ramoC = (prompt("ingreso ramo:")) ;
  let notaC1 = parseInt(prompt("ingrese nota 1:")) ;
  let notaC2 = parseInt(prompt("ingreso nota 2:")) ; 
  let notaC3 = aprobado-(notaC1+notaC2);
 

    let datosPrincipales = document.getElementById("datosPrincipales");
    datosPrincipales.innerHTML += `<p>Nombre ${nombre} ${apellido}<p>Carrera ${carrera}</p></p>`;
    let tabla = document.getElementById("tabla");
    tabla.innerHTML +=  `<tr>    <th>${ramoA}</th>    <td>${notaA1}</td>    <td>${notaA2}</td>    <td>${notaA3}</td>    <td>${promedioA}</td>  </tr>`;
    tabla.innerHTML +=  `<tr>    <th>${ramoB}</th>    <td>${notaB1}</td>    <td>${notaB2}</td>    <td>${notaB3}</td>    <td>${promedioB}</td>  </tr>`;
    tabla.innerHTML +=  `<tr>    <th>${ramoC}</th>    <td>${notaC1}</td>    <td>${notaC2}</td>    <td>-</td>    <td>-</td>  </tr>`;
    let faltante = document.getElementById("faltante");
    faltante.innerHTML += `<p>Para aprobar el ramo ${ramoC} con nota 4, necesitas obtener un <span> ${notaC3}</span> en la nota 3</p>`

}

}

puedeEntrar();



