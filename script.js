let errores = [];

const nombre = document.document.getElementById('nombre');
const correo = document.document.getElementById('correo');
const asunto = document.document.getElementById('asunto');
const opinion = document.document.getElementById('opinion');

const enviar = document.document.getElementById('enviar');

if(nombre === ""){
  errores.push("El campo nombre esta vacio");
}

if(correo === ""){
  errores.push("El campo correo esta vacio");
}

if(asunto === ""){
  errores.push("El campo asunto esta vacio");
}

if(opinion === ""){
  errores.push("El campo opinion esta vacio");
}

enviar.addEvenListener("click", (e) => {
  e.preventDefault();
  console.log("Has enviado el formulario");
});
  