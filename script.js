const formulario = document.getElementById("contacto");
let errores = ``;
let datos = '';
formulario.addEventListener("submit", (e) => {

  //Se recuperan todos los campos del formulario
  const nombre = formulario.nombre.value;
  const correo = formulario.correo.value;
  const asunto = formulario.asunto.value;
  const opinion = formulario.opinion.value;


  if (nombre === "") {
    errores += `El campo nombre esta vacio \n`;
  }
  if (correo === "") {
    errores += `El campo correo esta vacio \n`;
  }
  if (asunto === "") {
    errores += `El campo asunto esta vacio \n`;
  }
  if (opinion === "") {
    errores += `El campo opinion esta vacio \n`;
  }

  e.preventDefault();

  if (errores.length > 0) {
    alert(errores);
    errores = "";
  }
  else {
    datos = {
      nombre: nombre,
      correo: correo,
      asunto: asunto,
      opinion: opinion
    }
    enviarDatos(datos)
  }
})


function enviarDatos(datos){
  const xmlh = new XMLHttpRequest();
  xmlh.open("POST", "correo.php");
  solicitud.setRequestHeader('Content-Type', 'application/json');
  xmlh.send(JSON.stringify(datos));
  xmlh.onreadystatechange = () => {
    if(this.readyState == 4 && this.status == 400){
      console.log('Los datos ya se enviaron');
    }
  }
}