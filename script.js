let errores = [];

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('correo');
const asunto = document.getElementById('asunto');
const opinion = document.getElementById('opinion');

const enviar = document.getElementById('enviar');

if(nombre.value === ""){
  errores.push("El campo nombre esta vacio");
}

if(correo.value === ""){
  errores.push("El campo correo esta vacio");
}

if(asunto.value === ""){
  errores.push("El campo asunto esta vacio");
}

if(opinion.value === ""){
  errores.push("El campo opinion esta vacio");
}

enviar.addEventListener('click', (e) => {
  e.preventDefault();
  if(errores.length > 0 ){
    alert(`${errores[0]} ${errores[1]} ${errores[2]} ${errores[3]}`);
  }
  else{
    alert(`${nombre.value} \n ${correo.value} \n ${asunto.value} \n ${opinion.value}`);
  }
});