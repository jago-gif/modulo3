// Pedir al usuario que ingrese la edad
let edad = parseInt(prompt("ingrese su edad:"));


let puedeEntrar = function () {
  if (edad < 18) {
    alert("no puedes entrar porque estás muy chico")
  } else {
    let nombre = (prompt("ingreso su nombre:"));
    let apellido = (prompt("ingreso apellido:"));
    let carrera = (prompt("ingreso su carrera:"));
    let ramoA = (prompt("ingreso ramo:"));
    let notaA1 = parseInt(prompt(`ingrese nota 1 del ramo ${ramoA}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let notaA2 = parseInt(prompt(`ingrese nota 2 del ramo ${ramoA}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let notaA3 = parseInt(prompt(`ingrese nota 3 del ramo ${ramoA}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let promedioA = Math.ceil((notaA1 + notaA2 + notaA3) / 3);
    let ramoB = (prompt("ingreso ramo:"));
    let notaB1 = parseInt(prompt(`ingrese nota 1 de ${ramoB}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let notaB2 = parseInt(prompt(`ingrese nota 2 de ${ramoB}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let notaB3 = parseInt(prompt(`ingrese nota 3 de ${ramoB}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let promedioB = Math.ceil((notaB1 + notaB2 + notaB3) / 3);
    let ramoC = (prompt("ingreso ramo:"));
    let notaC1 = parseInt(prompt(`ingrese nota 1 de ${ramoC}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let notaC2 = parseInt(prompt(`ingrese nota 2 de ${ramoC}
  la nota debe ser entre 10 y 70 sin puntos:`));
    let notaAprobacion = parseInt(prompt("Ingrese la nota minima para aprobar"));
    let aprobado = notaAprobacion * 3
    let notaC3 = aprobado - (notaC1 + notaC2);


    document.getElementById("nombre").innerHTML = `${nombre}  ${apellido}`;
    document.getElementById("carrera").innerHTML = `${carrera}`;

    document.getElementById("ramo1").innerHTML = `${ramoA}`;
    document.getElementById("notaA1").innerHTML = `${notaA1}`;
    document.getElementById("notaA2").innerHTML = `${notaA2}`;
    document.getElementById("notaA3").innerHTML = `${notaA3}`;
    document.getElementById("promedioA").innerHTML = `${promedioA}`;

    //carla empieza aquí el ramo2
    document.getElementById("ramo2").innerHTML = `${ramoB}`;
    document.getElementById("notaB1").innerHTML = `${notaB1}`;
    document.getElementById("notaB2").innerHTML = `${notaB2}`;
    document.getElementById("notaB3").innerHTML = `${notaB3}`;
    document.getElementById("promedioB").innerHTML = `${promedioB}`;



    //mariana empieza aquí el ramo3
    document.getElementById("ramo3").innerHTML = `${ramoC}`;
    document.getElementById("notaC1").innerHTML = `${notaC1}`;
    document.getElementById("notaC2").innerHTML = `${notaC2}`;
    document.getElementById("notaC3").innerHTML = `-`;
    document.getElementById("promedioC").innerHTML = `-`;


if(notaC3<10){
  document.getElementById("faltante").innerHTML += `<p>Para aprobar el ramo ${ramoC} con nota minima ${notaAprobacion}, necesitas obtener un <span> 10 </span> en la nota 3</p>`
}else{
  document.getElementById("faltante").innerHTML += `<p>Para aprobar el ramo ${ramoC} con nota minima ${notaAprobacion}, necesitas obtener un <span> ${notaC3}</span> en la nota 3</p>`
}
  }

}

puedeEntrar();



